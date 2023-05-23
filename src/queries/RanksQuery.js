import {authorizedFetch} from "./authorizedFetch";

export const RankQueryJSON = (id) => ({
    "query": 
        `query ($id: ID!) {
            roleTypeById(id: $id){
                id, name, nameEn, lastchange
              
            }
        }`,
    "variables": {
      "id": id
    }
  })

  export const RanksQueryJSON = () => ({   // funguje - server odpovida, teď to ještě načíst do storu správně
    "query":
        `query{
            roleTypePage{
            id, name, nameEn, lastchange
            }
        }`
})
  

export const RankQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(RankQueryJSON(id)),
    })


export const RanksQuery = () =>
authorizedFetch('/gql', {
    body: JSON.stringify(RanksQueryJSON()),
})

//roleTypePage

/*

query {

  groupTypePage {

    id

    name

    nameEn

    lastchange

  }

}

{

  "data": {

    "groupTypePage": [

      {

        "id": "cd49e152-610c-11ed-9f29-001a7dda7110",

        "name": "univerzita",

        "nameEn": "university",

        "lastchange": "2023-05-03 19:23:58.960309"

      },

      {

        "id": "cd49e153-610c-11ed-bf19-001a7dda7110",

        "name": "fakulta",

        "nameEn": "faculty",

        "lastchange": "2023-05-03 19:23:58.960309"

      },

*/

/*

query {

  roleTypePage {

    id

    name

    nameEn

    lastchange

  }

}


{

  "data": {

    "roleTypePage": [

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

*/