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

## 16.06 - 19.06.
Revised progress on consultation, seems good

- Add and modify store

- Send new or modified data to server for roleTypes

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


---

Todo:

- Lepší dictionary než vektor - Přes dic to dělalo divné věci :)

- Mutation for groupType

- query and page for Medal types 

- JSDoc

- Reverse button?

- Smazat mezery z payload stringu



- > Ask:

    - If this is the right way 
    >>**It is**

    - Wethere to use TextInput or "save" button >
    >>**How u  want it, maybe reset button would be better**

    - Only add and update?  
    >>**Only add and update, don't delete** *Data are bound accross the whole system*

    - Which other data to add 
    >>**EvenetTypePage, ProjectTypePage** *Check the documentation*

    ## ALL 
Editace systémových informací (typy entit, kategorie entit) ?? 
- **DONE** typy rolí uživatelů ve skupinách, => garant, velitel čety - roleTypePage

- **Add mutation** typy skupin, - groupTypePage

**Neexistuje mutation**:

-  typy financí => osobní, nákup služeb (Rozdělení rozpočtu)  - finenaceTypePage

-  typy událostí, => Výuka, nástup, zkouška, konzultace - evenetTypePage

- typy projektů, => podskupiny grantů (GAČR, TECHONOLOGICKÁ tačr) - projectTypePage

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


