import { useLoadScript } from '@react-google-maps/api'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import styled from 'styled-components'

import { Input, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { getStateValues } from '../../../../../features/users/userSlice'

// This is outcome from address

const libraries = ['places']

const GooglePlacesHook = () => {
  // Load your script first
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
    // library is must
    libraries,
  })

  if (!isLoaded) {
    return <Input size='large' disabled={true} />
  }
  return (
    <>
      <div className='places-container'>
        <PlacesAutocomplete />
      </div>
    </>
  )
}
// We have this approach because this component must load after isLoaded useLoadScript
const PlacesAutocomplete = () => {
  const dispatch = useDispatch()
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      componentRestrictions: { country: ['ca'] },
    },
    debounce: 300,
  })

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    // getGeocode({ address }).then((results) => {
    //   const { lat, lng } = getLatLng(results[0])
    //   console.log('📍 Coordinates: ', { lat, lng })
    // })
    const results = await getGeocode({ address })
    const { lat, lng } = getLatLng(results[0])
    const location = {
      type: 'Point',
      coordinates: [lng, lat],
    }

    // Setting state code=======Start
    const addressDetails = results[0]
    const { address_components } = addressDetails
    const length = address_components.length
    const startLength = address_components.length - 5
    // We Slice because last 5 values are important also some times array is not returning same values.
    const lastAddress = address_components.slice(startLength, length)

    dispatch(
      getStateValues({ name: 'house', value: address_components[0]?.long_name })
    )
    dispatch(
      getStateValues({
        name: 'street',
        value: address_components[1]?.long_name,
      })
    )
    dispatch(getStateValues({ name: 'city', value: lastAddress[0]?.long_name }))
    dispatch(
      getStateValues({ name: 'region', value: lastAddress[1]?.long_name })
    )
    dispatch(
      getStateValues({ name: 'province', value: lastAddress[2]?.long_name })
    )
    dispatch(
      getStateValues({ name: 'country', value: lastAddress[3]?.long_name })
    )
    dispatch(
      getStateValues({ name: 'postalCode', value: lastAddress[4]?.long_name })
    )

    dispatch(
      getStateValues({ name: 'location', value: JSON.stringify(location) })
    )
    //
  }
  // state code=======End
  return (
    <Wrapper>
      <Select
        showSearch
        value={value}
        onChange={handleSelect}
        onSearch={setValue}
        className='form-input'
        placeholder='Search here'
        disabled={!ready}
        size='large'
        filterOption={false}
      >
        {status === 'OK' &&
          data.map((item, index) => (
            <Select.Option key={index} value={item.description}>
              {item.description}
            </Select.Option>
          ))}
      </Select>
    </Wrapper>
  )
}
const Wrapper = styled.div``

export default GooglePlacesHook
