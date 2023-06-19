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
>> RoleTypesPage doesnt update other roleTypes, by query id, they are inserted (id=a, "id": "a5ee742d-8f4a-4c86-bed5-fac048571160")


---

FinanceType mutatuion není?

---

Todo:

- Lepší dictionary než vektor - Přes dic to dělalo divné věci :)

- Mutations (Nenašel jsem, nebo neexistují):

    - FinanceType?

    - ProjectType?

    - EvenType?

- Queries:
    
    -Kategorie financí?

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
- **DONE** typy skupin, 
- **DONE** typy rolí uživatelů ve skupinách, => garant, velitel čety
- **DONE** typy událostí, => Výuka, nástup, zkouška, konzultace - EvenetTypePage
- kategorie projektů, => Granty ČR, mezinárodní EU  - ProjectTypePage
- typy projektů, => podskupiny grantů (GAČR, TECHONOLOGICKÁ tačr)
-  kategorie financí => nadtypama 
- **DONE** typy financí => osobní, nákup služeb (Rozdělení rozpočtu)  **FinenaceTypePage
- kategorie medailí => Vyznamenání (statní, vojenská,...) 
- typy medailí => zlatá, stříbrná, bronzová ... 

