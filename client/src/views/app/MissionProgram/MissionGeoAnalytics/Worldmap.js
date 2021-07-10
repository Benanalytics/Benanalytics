
import React from 'react'
import styled from 'styled-components'
import { VectorMap } from '@south-paw/react-vector-maps';
import { data } from './mapdata'
import { CardBody } from 'reactstrap';
import ReactColorBar from './ReactColorBar'

const Map = styled.div`
  margin: 1rem auto;
  width: 100%;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      //<<================set  background color ===============>>
      &[id="ng-ab"] {
        fill: #F66E6E;
      }
      &[id="ng-ab"]{
        fill:#F66E6E
      }
      &[id="ng-ad"]{
        fill:#F66E6E
      }
      &[id="ng-ak"]{
        fill:#F66E6E
      }
      &[id="ng-an"]{
        fill:#F66E6E
      }
      &[id="ng-ba"]{
        fill:#F66E6E
      }
      &[id="ng-be"]{
        fill:#F66E6E
      }
      &[id="ng-bo"]{
        fill:#F66E6E
      }
      &[id="ng-by"]{
        fill:#F66E6E
      }
      &[id="ng-cr"]{
        fill:#F66E6E
      }
      &[id="ng-de"]{
        fill:#F78686
      }
      &[id="ng-eb"]{
        fill:#F78686
      }
      &[id="ng-ed"]{
        fill:#F78686
      }
      &[id="ng-ek"]{
        fill:#F78686
      }
      &[id="ng-en"]{
        fill:#F78686
      }
      &[id="ng-fc"]{
        fill:#F78686
      }
      &[id="ng-go"]{
        fill:#F78686
      }
      &[id="ng-im"]{
        fill:#F78686
      }
      &[id="ng-ji"]{
        fill:#F78686
      }
      &[id="ng-kd"]{
        fill:#F78686
      }
      &[id="ng-ke"]{
        fill:#F78686
      }
      &[id="ng-kn"]{
        fill:#F78686
      }
      &[id="ng-ko"]{
        fill:#F78686
      }
      &[id="ng-kt"]{
        fill:#F78686
      }
      &[id="ng-kw"]{
        fill:#F78686
      }
      &[id="ng-la"]{
        fill:#F78686
      }
      &[id="ng-na"]{
        fill:#F78686
      }
      &[id="ng-ni"]{
        fill:#F78686
      }
      &[id="ng-og"]{
        fill:#F78686
      }
      &[id="ng-on"]{
        fill:#F78686
      }
      &[id="ng-os"]{
        fill:#F78686
      }
      &[id="ng-oy"]{
        fill:#F78686
      }
      &[id="ng-pl"]{
        fill:#FDD2D2
      }
      &[id="ng-ri"]{
        fill:#FDD2D2
      }
      &[id="ng-so"]{
        fill:#FDD2D2
      }
      &[id="ng-ta"]{
        fill:#FDD2D2
      }
      &[id="ng-yo"]{
        fill:#FDD2D2
      }
      &[id="ng-za"]{
        fill:#FDD2D2
      }
      // When a layer is hovered
      &:hover {
        fill: #2e2e2e;
      }

      // When a layer is focused.
      &:focus {
        fill: #2e2e2e;
      }
      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: red;
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: black;
      }
    }
  }
`;




const Worldmap = () => {
  const [hovered, setHovered] = React.useState('None');
  const [focused, setFocused] = React.useState('None');
  const [clicked, setClicked] = React.useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  let readings = [
    {
      name: '120',
      value: 60,
      color: '#F66767'
    },
    {
      name: '70',
      value: 27,
      color: '#F89999'
    },
    {
      name: '50',
      value: 13,
      color: '#FDD7D7'
    }
  ];
  return (
    <div>
      <div>
        <div>
          {
            focused !== 'None' ?
              <div>
                <h1>Details  About : {focused && <code>{focused}</code>}</h1>
                <hr />
                <h3>Mission: 10</h3>
                <h3>Close Portfolio: USD10 million</h3>
                <h3>Active Portfolio: 20 USD Million</h3>
                <h3>Lending: 14 USD million</h3>
                <h3>Pipeline: 16 USD million</h3>
                <h3>Funding (New): 1</h3>
              </div> : ''
          }
        </div>
        <ReactColorBar readings={readings} />
      </div>
      <div style={{ position: 'relative' }}>
        {
          hovered !== 'None' ?
            <h1 style={{ position: 'absolute', top: "50%", left: '50%', color: 'black !important', background: 'white', padding: ' 0 15px', pointerEvents: 'none', transform: 'translate(-50%, -50%)' }}  >{hovered && <code>{hovered}</code>}</h1>
            : ''
        }
        <Map >
          <VectorMap {...data} layerProps={layerProps} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']} />
        </Map>
      </div>
    </div>
  )
}

export default Worldmap
