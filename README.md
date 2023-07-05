### `npm start`

---

## Before 16.05.

### Until 19.4.
Worked [here](https://github.com/Haki-22/_uois_ui_helpers)

### Until 29.4.
Then [here](https://github.com/Haki-22/all-fd)

---

## 16.05.
Components in demo repo

- Table that containts real data

- Delete an entry

- Change "Název" for entry

## 19.-21.05.

- Store

- Single entry from server

- Statefull component, can delete it from store

![Store](/public/Store.png)


![Store2](/public/store2.png)

##  9.-11.06.
2/9 Tables displaying server data

- Fixed: Misunderstood the assignment: not doing anything with ranks, should be roles instead. 

- Tables now display all of the data

## 16.06. - 19.06.
Revised progress on consultation, seems good

- Add and modify store 
    - Vec reducers

- Send new or modified data to server for roleTypes
    - AsyncActions


4/9 Tables displaying server data

## 21.06
5/9 Tables displaying server data

- Project types

- Addbutton test

- JSDOC

- NameInput, after entering text automatically changes on server 

>Fixed:
>   
>  - Fix groupTypes not showing
>
>       - They are in store, just not showing in table? 
>>  Used `<` instead of `>` :) 
>
>   - Don't use bindGroupTypeActions(dispatch)
>> Replaced with `useEffect(() => { actions.groupTypeFetch() }, [dispatch]);`
>> 
>> Is it enough?
>
>  - Fix name change to do something other then `console.log`
>
>       - (Create mutation to send to server)
>
>       - Change name_en also?
>
>
> - RoleTypes instead of Roles
>
>

## 24.06. - 2.07.
6/6 Tables displaying server data (3/9 don't have queries nor mutations)

2/2 Can update real server data (6/9 don't have mutations)

- Mutation for groupType

- medalType page

2/2 Can add type (RoleTypes, GroupTypes)

- TypesNameInput: Component for name input (Can take name or nameEn) (input box pro název typu)

- RenameType button: Component for renaming the type (button pro přejmenování typu)

    - Implementation for more types

    - RenameRoleType button for single type

- Ensure that the name doesnt end with blank spaces (trim)

- Add Table Row component - row for adding a new type

- Comments and JSDOC

---

Todo:

- Lepší dictionary než vektor - Vše je přes ID 

- Reverse button?

- @function into all comments

---

## ALL 
Editace systémových informací (typy entit, kategorie entit) ?? 
- **DONE** typy rolí uživatelů ve skupinách, => garant, velitel čety - roleTypePage

- **DONE** typy skupin, - groupTypePage

**Neexistuje mutation**:

-  typy financí => osobní, nákup služeb (Rozdělení rozpočtu)  - finenaceTypePage

-  typy událostí, => Výuka, nástup, zkouška, konzultace - evenetTypePage

-  typy projektů, => podskupiny grantů (GAČR, TECHONOLOGICKÁ tačr) - projectTypePage

-  typy medailí => zlatá, stříbrná, bronzová ... 

query {medalTypePage {
  id
  name
}}

---

**Neexistuje query, ani mutation** 

- kategorie projektů, => Granty ČR, mezinárodní EU  

    - Existuje pouze: query {projectPage{id name lastchange}}

        - Returns a list of projects

- kategorie financí => nadtypama 
    
    - Existuje pouze: query {financePage{id, name, lastchange, amount}} / financeInsert

        - Returns a list of finances

- kategorie medailí => Vyznamenání (statní, vojenská,...) 

    - Existuje pouze: query {medalPage{id year}}


