import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
const data = [
  {
    ProjectTitle: '',
    SAPID: 'P-NG-J00-005',
    CITY: 'Lagos Lagos',
    lat: '6.454066',
    lng: '3.394673',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-HZ0-006',
    CITY: 'Kano Kano',
    lat: '12.002381',
    lng: '8.51316',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-HB0-010',
    CITY: 'Oyo Ibadan',
    lat: '7.377562',
    lng: '3.905907',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-HAB-047',
    CITY: 'Federal Capital Territory Abuja',
    lat: '9.083333',
    lng: '7.533333',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-HAA-013',
    CITY: 'Kaduna Kaduna',
    lat: '10.526413',
    lng: '7.438795',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-H00-017',
    CITY: 'Edo Benin City',
    lat: '6.338153',
    lng: '5.625749',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-015',
    CITY: 'Ondo Ikare',
    lat: '7.525913',
    lng: '5.753417',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-012',
    CITY: 'Oyo Ogbomoso',
    lat: '8.133725',
    lng: '4.240144',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-014',
    CITY: 'Rivers Port Harcourt',
    lat: '4.777423',
    lng: '7.013404',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FZ0-010',
    CITY: 'Abia Aba',
    lat: '5.106576',
    lng: '7.366667',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FZ0-009',
    CITY: 'Borno Maiduguri',
    lat: '11.846924',
    lng: '13.157122',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-007',
    CITY: 'Plateau Jos',
    lat: '9.92849',
    lng: '8.892118',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-013',
    CITY: 'Kaduna Zaria',
    lat: '11.078945',
    lng: '7.710359',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-012',
    CITY: 'Delta Warri',
    lat: '5.51737',
    lng: '5.750064',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-001',
    CITY: 'Oyo Oyo',
    lat: '7.852575',
    lng: '3.931249',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-005',
    CITY: 'Kwara Ilorin',
    lat: '8.496642',
    lng: '4.542143',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FD0-008',
    CITY: 'Sokoto Sokoto',
    lat: '13.048025',
    lng: '5.214285',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-004',
    CITY: 'Ogun Abeokuta',
    lat: '7.15571',
    lng: '3.345086',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-011',
    CITY: 'Enugu Enugu',
    lat: '6.441321',
    lng: '7.498834',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-003',
    CITY: 'Akwa Ibom Uyo',
    lat: '5.033333',
    lng: '7.92657',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-017',
    CITY: 'Anambra Awka',
    lat: '6.21269',
    lng: '7.071986',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-BB0-009',
    CITY: 'Osun Ile-Ife',
    lat: '7.482405',
    lng: '4.560324',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AB0-001',
    CITY: 'Cross River Calabar',
    lat: '4.958931',
    lng: '8.32695',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAE-001',
    CITY: 'Ekiti Ado-Ekiti',
    lat: '7.623289',
    lng: '5.22087',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-013',
    CITY: 'Ondo Akure',
    lat: '7.25256',
    lng: '5.193118',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAB-005',
    CITY: 'Katsina Katsina',
    lat: '12.990823',
    lng: '7.601769',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-EBD-001',
    CITY: 'Osun Osogbo',
    lat: '7.771045',
    lng: '4.556979',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-013',
    CITY: 'Delta Mele',
    lat: '5.889152',
    lng: '5.701355',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-012',
    CITY: 'Bauchi Bauchi',
    lat: '10.310321',
    lng: '9.843883',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-012',
    CITY: 'Benue Makurdi North',
    lat: '7.7493',
    lng: '8.5508',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAD-004',
    CITY: 'Niger Minna',
    lat: '9.615235',
    lng: '6.54776',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-IA0-007',
    CITY: 'Gombe Gombe',
    lat: '10.28969',
    lng: '11.167288',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-009',
    CITY: 'Abia Umuahia',
    lat: '5.524913',
    lng: '7.494613',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-002',
    CITY: 'Yobe Damaturu',
    lat: '11.746968',
    lng: '11.960826',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-006',
    CITY: 'Ondo Ondo',
    lat: '7.093165',
    lng: '4.835277',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-F00-026',
    CITY: 'Osun Iwo',
    lat: '7.635268',
    lng: '4.181556',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-EAZ-004',
    CITY: 'Zamfara Gusau',
    lat: '12.17024',
    lng: '6.664116',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DB0-017',
    CITY: 'Adamawa Mubi',
    lat: '10.268585',
    lng: '13.267013',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-020',
    CITY: 'Imo Owerri',
    lat: '5.483626',
    lng: '7.033248',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-014',
    CITY: 'Ogun Ijebu-Ode',
    lat: '6.819444',
    lng: '3.917311',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-IB0-009',
    CITY: 'Ondo Owo',
    lat: '7.196195',
    lng: '5.586806',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAG-011',
    CITY: 'Katsina Funtua',
    lat: '11.523505',
    lng: '7.311744',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-J00-004',
    CITY: 'Niger Bida',
    lat: '9.080442',
    lng: '6.009902',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-G00-004',
    CITY: 'Yobe Gashua',
    lat: '12.873976',
    lng: '11.040568',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-H00-016',
    CITY: 'Nasarawa Lafia',
    lat: '8.493897',
    lng: '8.515316',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-F00-014',
    CITY: 'Borno Buzawa',
    lat: '11.545362',
    lng: '13.684518',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-010',
    CITY: 'Taraba Jalingo',
    lat: '8.893668',
    lng: '11.359596',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAA-002',
    CITY: 'Enugu Nsukka',
    lat: '6.856543',
    lng: '7.385977',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-005',
    CITY: 'Yobe Nguru',
    lat: '12.876952',
    lng: '10.455361',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-001',
    CITY: 'Kebbi Birnin Kebbi',
    lat: '12.453889',
    lng: '4.1975',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-011',
    CITY: 'Niger Kontagora',
    lat: '10.403189',
    lng: '5.470797',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-004',
    CITY: 'Oyo Iseyin',
    lat: '7.97022',
    lng: '3.596256',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-003',
    CITY: 'Adamawa Yola',
    lat: '9.208394',
    lng: '12.481464',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-017',
    CITY: 'Borno Biu',
    lat: '10.612854',
    lng: '12.194579',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-BB0-009',
    CITY: 'Taraba Wukari',
    lat: '7.871393',
    lng: '9.77786',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AB0-001',
    CITY: 'Yobe Potiskum',
    lat: '11.713909',
    lng: '11.081077',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAE-001',
    CITY: 'Nasarawa Keffi',
    lat: '8.84651',
    lng: '7.873539',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAB-005',
    CITY: 'Adamawa Numan',
    lat: '9.463742',
    lng: '12.03062',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-013',
    CITY: 'Kogi Idah',
    lat: '7.113446',
    lng: '6.73866',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-EBD-001',
    CITY: 'Anambra Onitsha',
    lat: '6.149779',
    lng: '6.78569',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-012',
    CITY: 'Benue Otukpo',
    lat: '7.193963',
    lng: '8.134556',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-012',
    CITY: 'Kogi Lokoja',
    lat: '7.796882',
    lng: '6.740481',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-007',
    CITY: 'Gombe Kumo',
    lat: '10.048067',
    lng: '11.210555',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-005',
    CITY: 'Rivers Opobo',
    lat: '4.513882',
    lng: '7.537941',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-001',
    CITY: 'Kebbi Koko',
    lat: '11.421544',
    lng: '4.516867',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FD0-008',
    CITY: 'Jigawa Dutse',
    lat: '11.75618',
    lng: '9.338959',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-011',
    CITY: 'Imo Orlu',
    lat: '5.795645',
    lng: '7.035126',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-004',
    CITY: 'Katsina Kankara',
    lat: '11.931137',
    lng: '7.411149',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FD0-008',
    CITY: 'Bauchi Azare',
    lat: '11.674783',
    lng: '10.190687',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-BB0-009',
    CITY: 'Nasarawa Keana',
    lat: '8.147244',
    lng: '8.796008',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DA0-003',
    CITY: 'Federal Capital Territory Gwagwalada',
    lat: '8.943423',
    lng: '7.08165',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AB0-001',
    CITY: 'Benue Gbajimba',
    lat: '7.820399',
    lng: '8.859545',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-017',
    CITY: 'Sokoto Kebbe',
    lat: '12.128615',
    lng: '4.73433',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAB-005',
    CITY: 'Kano Ririwai',
    lat: '10.74025',
    lng: '8.741285',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FA0-013',
    CITY: 'Kogi Kabba',
    lat: '7.827192',
    lng: '6.075021',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-EBD-001',
    CITY: 'Bauchi Darazo',
    lat: '10.999201',
    lng: '10.410618',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-012',
    CITY: 'Delta Issele-Uku',
    lat: '6.315839',
    lng: '6.47599',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-013',
    CITY: 'Kaduna Makarfi',
    lat: '11.377342',
    lng: '7.880977',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-012',
    CITY: 'Adamawa Gombi',
    lat: '10.167556',
    lng: '12.736843',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAD-004',
    CITY: 'Akwa Ibom Utu Etim Ekpo',
    lat: '5.004848',
    lng: '7.610283',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-IB0-009',
    CITY: 'Niger Katcha',
    lat: '8.760758',
    lng: '6.312003',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-IA0-007',
    CITY: 'Ondo Igbara-Oke',
    lat: '7.411719',
    lng: '5.058054',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAE-001',
    CITY: 'Akwa Ibom Ikot Ekpene',
    lat: '5.18194',
    lng: '7.714812',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-009',
    CITY: 'Kano Garun Malam',
    lat: '11.685659',
    lng: '8.369856',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-006',
    CITY: 'Adamawa Hong',
    lat: '10.233045',
    lng: '12.928052',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-I00-002',
    CITY: 'Lagos Ikotun',
    lat: '6.544333',
    lng: '3.263789',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-F00-026',
    CITY: 'Imo Nkwerre',
    lat: '5.759175',
    lng: '7.103836',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-EAZ-004',
    CITY: 'Borno Mafa',
    lat: '11.924171',
    lng: '13.600656',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-DB0-017',
    CITY: 'Niger Nasko',
    lat: '10.495389',
    lng: '4.899036',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-020',
    CITY: 'Lagos Festac Town',
    lat: '6.469698',
    lng: '3.282988',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-D00-014',
    CITY: 'Ebonyi Nguzu Edda',
    lat: '5.755433',
    lng: '7.817206',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-J00-004',
    CITY: 'Sokoto Illela',
    lat: '13.730642',
    lng: '5.297772',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAG-011',
    CITY: 'Gombe Dukku',
    lat: '10.823794',
    lng: '10.772211',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-H00-016',
    CITY: 'Cross River Effraya',
    lat: '5.859256',
    lng: '8.723006',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-G00-004',
    CITY: 'Imo Isinweke',
    lat: '5.620478',
    lng: '7.349854',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-F00-014',
    CITY: 'Jigawa Kiri Kasamma',
    lat: '12.692734',
    lng: '10.254557',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-E00-010',
    CITY: 'Benue Ugba',
    lat: '7.506998',
    lng: '9.348042',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-AAA-002',
    CITY: 'Ebonyi Obiozara',
    lat: '6.04644',
    lng: '7.772727',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-005',
    CITY: 'Borno Gwoza',
    lat: '11.083125',
    lng: '13.695948',
  },
  {
    ProjectTitle: '',
    SAPID: 'P-NG-FF0-001',
    CITY: 'Niger Mashegu',
    lat: '9.972126',
    lng: '5.778858',
  },
];
const Markers1 = () => {
  const markers = data.map((mark, i) => {
    if (i < 19) {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          // icon={customMarkerIcon}
          icon={divIcon({
            html: renderToStaticMarkup(
              <i
                class="fas fa-circle"
                style={{ color: '#1F9DDB', fontSize: '12px' }}
              ></i>
            ),
          })}
          riseOnHover="hello"
        >
          <Popup>{i}</Popup>
        </Marker>
      );
    } else if (i < 39) {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          // icon={customMarkerIcon}
          icon={divIcon({
            html: renderToStaticMarkup(
              <i
                class="fas fa-circle"
                style={{ color: '#6EAA27', fontSize: '12px' }}
              ></i>
            ),
          })}
          riseOnHover="hello"
        >
          <Popup>{i}</Popup>
        </Marker>
      );
    } else if (i < 59) {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          // icon={customMarkerIcon}
          icon={divIcon({
            html: renderToStaticMarkup(
              <i
                class="fas fa-circle"
                style={{ color: '#B9AC15', fontSize: '12px' }}
              ></i>
            ),
          })}
          riseOnHover="hello"
        >
          <Popup>{i}</Popup>
        </Marker>
      );
    } else if (i < 79) {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          // icon={customMarkerIcon}
          icon={divIcon({
            html: renderToStaticMarkup(
              <i
                class="fas fa-circle"
                style={{ color: '#FB8310', fontSize: '12px' }}
              ></i>
            ),
          })}
          riseOnHover="hello"
        >
          <Popup>{i}</Popup>
        </Marker>
      );
    } else if (i < 99) {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          // icon={customMarkerIcon}
          icon={divIcon({
            html: renderToStaticMarkup(
              <i
                class="fas fa-circle"
                style={{ color: '#B92B34', fontSize: '12px' }}
              ></i>
            ),
          })}
          riseOnHover="hello"
        >
          <Popup>{i}</Popup>
        </Marker>
      );
    }
  });
  return <>{markers}</>;
};

export default Markers1;
