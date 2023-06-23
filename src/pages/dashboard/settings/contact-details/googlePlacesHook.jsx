import { useLoadScript } from '@react-google-maps/api'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import styled from 'styled-components'

import { Input, Select } from 'antd'

// This is outcome from address

const libraries = ['places']

const GooglePlacesHook = ({ state, setState }) => {
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
        <PlacesAutocomplete state={state} setState={setState} />
      </div>
    </>
  )
}
// We have this approach because this component must load after isLoaded useLoadScript
const PlacesAutocomplete = ({ state, setState }) => {
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
    setState({
      ...state,
      house: address_components[0]?.long_name,
      street: address_components[1]?.long_name,
      city: lastAddress[0]?.long_name,
      region: lastAddress[1]?.long_name,
      province: lastAddress[2]?.long_name,
      country: lastAddress[3]?.long_name,
      postalCode: lastAddress[4]?.long_name,
      location: location,
    })
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
