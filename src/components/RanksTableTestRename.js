import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import { DeleteButton } from './DeleteButton';
import { TextInput } from 'components/TextInput';

const rankTypes = [
    /* mužstvo */
   {
       "name": "vojín (voj.)",
       "name_en": "Private (PVT)",
       "id": "de5e6ae8-902c-4b06-aa8e-8fbca99026f3",
   },
   {
       "name": "svobodník (svob.)",
       "name_en": "Private First Class (PFC)",
       "id": "f3038058-e1fa-4f7c-9e50-7b1d99998d37",
   },
   /* # poddůstojníci */
   {
       "name": "desátník (des.)",
       "name_en": "Corporal (CPL)",
       "id": "a3cdae76-1c7d-409c-8bed-9e922c066bce",
   },
   {
       "name": "četař (čet.)",
       "name_en": "Sergeant (SGT)",
       "id": "a17e81a6-776b-4883-a04d-cbd4f07ad095",
   },
   {
       "name": "rotný (rtn.)",
       "name_en": "Staff Sergeant (SSG)",
       "id": "a9043224-9c3b-4562-a329-997fba9237d0",
   },
   /* # praporčíci */
   {
       "name": "rotmistr (rtm.)",
       "name_en": "Sergeant First Class (SFC)",
       "id": "72294ac5-1823-4164-9805-60a0aaa39296",
   },
   {
       "name": "nadrotmistr (nrtm.)",
       "name_en": "Master Sergeant (MSG)",
       "id": "453dff9e-fab2-41d0-8bef-ca76c78e79c8",
   },
   {
       "name": "praporčík (prap.)",
       "name_en": "Chief Warrant Officer (CW2)",
       "id": "6a324f4a-2162-4fe7-a47c-8be1f3c9452b",
   },
   {
       "name": "nadpraporčík (nprap.)",
       "name_en": "Chief Warrant Officer (CW3)",
       "id": "34cfd57e-6a09-4423-8025-b44d6dbce774",
   },
   {
       "name": "štábní praporčík (št. prap.)",
       "name_en": "Master Warrant Officer (MW4)",
       "id": "841fa09f-625e-49b4-8872-05c43ce197cf",
   },
   /* # nižší důstojníci */
   {
       "name": "poručík (por.)",
       "name_en": "Lieutenant (LT)",
       "id": "3914ab9f-78bc-45ac-bb2d-59ee921f3a19",
   },
   {
       "name": "nadporučík (npor.)",
       "name_en": "First Lieutenant (1LT)",
       "id": "437fa94e-8442-4667-af9a-8327afef9ffa",
   },
   {
       "name": "kapitán (ktp.)",
       "name_en": "Captain (CPT)",
       "id": "a8ce2853-26ec-4e10-8bbe-899cc296a35f",
   },
   /* # vyšší důstojníci */
   {
       "name": "major (mjr.)",
       "name_en": "Major (MAJ)",
       "id": "587cd381-aeec-4367-91f3-8849f900848a",
   },
   {
       "name": "podplukovník (pplk.)",
       "name_en": "Lieutenant Colonel (LTC)",
       "id": "46a7325f-9b9e-4e80-9f17-670bd9151229",
   },
   {
       "name": "plukovník (plk.)",
       "name_en": "Colonel (COL)",
       "id": "824533e5-eba7-45f7-80f6-e2466529e73c",
   },
   /* # generálové */
   {
       "name": "brigádní generál (brig.gen.)",
       "name_en": "Brigadier General (BG)",
       "id": "9eb8d8f4-a87c-447d-aaee-c0a15cd6fbce",
   },
   {
       "name": "generálmajor (genmjr.)",
       "name_en": "Major General (MG)",
       "id": "d65a0d25-dc39-46fa-a107-a684c9724c5e",
   },
   {
       "name": "generálporučík (genpor.)",
       "name_en": "Lieutenant General (LTG)",
       "id": "41f0772d-738a-492d-93c1-96c9cdb5d597",
   },
   {
       "name": "armádní generál (arm.gen.)",
       "name_en": "General of the Army (GA)",
       "id": "9234d06c-e811-4016-8ee5-f6975b4048a4",
   },
];


const roleTypePage= [
    {
      "id": "05a3e0f5-f71e-4caa-8012-229d868aa8ca",
      "name": "já",
      "nameEn": "myself",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f0d74-6159-11ed-b753-0242ac120003",
      "name": "rektor",
      "nameEn": "rector",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f2886-6159-11ed-b753-0242ac120003",
      "name": "prorektor",
      "nameEn": "vicerector",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f2912-6159-11ed-b753-0242ac120003",
      "name": "děkan",
      "nameEn": "dean",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f2980-6159-11ed-b753-0242ac120003",
      "name": "proděkan",
      "nameEn": "vicedean",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f29ee-6159-11ed-b753-0242ac120003",
      "name": "vedoucí katedry",
      "nameEn": "head of department",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "ae3f2a5c-6159-11ed-b753-0242ac120003",
      "name": "vedoucí učitel",
      "nameEn": "leading teacher",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "5f0c247e-931f-11ed-9b95-0242ac110002",
      "name": "garant",
      "nameEn": "grant",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "5f0c2532-931f-11ed-9b95-0242ac110002",
      "name": "garant (zástupce)",
      "nameEn": "grant (deputy)",
      "lastchange": "2023-05-03T19:23:58.979894"
    },
    {
      "id": "5f0c255a-931f-11ed-9b95-0242ac110002",
      "name": "garant předmětu",
      "nameEn": "subject's grant",
      "lastchange": "2023-05-03T19:23:58.979894"
    }
  ];


 

export const RanksTableTestRename = ({rank, action}) => {
  const [rankTypesCopy, setRankTypesCopy] = useState([...roleTypePage]);

  const onClickDelete = (index) => {
    const updatedRankTypes = [...rankTypesCopy];
    updatedRankTypes.splice(index, 1);
    setRankTypesCopy(updatedRankTypes);
  };

  const NameChange = (name, index) => {
    const updatedRankTypes = [...rankTypesCopy];
    updatedRankTypes[index].name = name;
    setRankTypesCopy(updatedRankTypes);
  };


  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Název</th>
          <th>Název anglicky</th>
          <th>Poslední změna</th>
          <th>Nástroje</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rankTypesCopy.map((rank, index) => (
          <tr>

            <td >{index + 1}</td>
            
            <td className="px-6 py-4 whitespace-nowrap w-full text-center">{rank.id}</td>
           
            <td>
              <TextInput
                placeholder="Název"
                id={rank.id}
                value={rank.name}
                onChange={(value) => NameChange(value, index)}
              />
            </td>

            <td className="px-6 py-4 whitespace-nowrap w-full">{rank.nameEn} </td>

            <td className="px-6 py-4 whitespace-nowrap w-full">{rank.lastchange} </td>

            <td>
              <DeleteButton onClick={() => onClickDelete(index)}>
                <Trash /> Delete
              </DeleteButton>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

/*
 <td> <TextInput placeholder={"Název"} id={rank.id} value={rank.name} onChange={NameChange}/></td>

 <TextInput placeholder={"Něco"} id={rank.id} />
*/