export const SingleRank = {
    "id": "05a3e0f5-f71e-4caa-8012-229d868aa8ca",
    "name": "já",
    "nameEn": "myself",
    "lastchange": "2023-05-03T19:23:58.979894"
}

export const roleTypePageA = {
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
      ]
}

// One Rank Query by ID
export const fakeQueryRank = async (id) => ({json: () => {
    const json = JSON.stringify(SingleRank)
    const result = JSON.parse(json)
    return {'rankById': {...result, id: id}}
 }})

 export const fakeQueryRanks = async () => ({json: () => {
    const json = JSON.stringify(roleTypePageA)
    const result = JSON.parse(json)
    return {'roleTypePage': result.roleTypePage}
 }})