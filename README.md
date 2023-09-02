## To run this project 
1. git clone https://github.com/imrulkayessifat/dashboard.git
2. cd dashboard
3. npm i
4. npm run dev
5. in browser type :   localhost:5132

## Building

To create a production version of your app:

```bash
npm run build
```
## Website 
https://dashboard-seven-lime.vercel.app/

## Details

**Github** : https://github.com/imrulkayessifat/dashboard

**Deploy** : https://dashboard-seven-lime.vercel.app/

**Frontend** : Svelte,Tailwind CSS,lottiefiles,charjs

**All features from the task are included. Design with full responsive**

**Home Page** : ![Screenshot from 2023-09-02 10-20-46](https://github.com/imrulkayessifat/dashboard/assets/41978816/cdfc34be-143c-4a82-87fa-c35985164861)

**Layout Page** :![Screenshot from 2023-09-02 10-22-11](https://github.com/imrulkayessifat/dashboard/assets/41978816/b2616836-ce89-4748-b35f-80483b553d5d)

**Chart Page** : ![Screenshot from 2023-09-02 10-23-07](https://github.com/imrulkayessifat/dashboard/assets/41978816/548635f0-7e06-4a69-923e-0a2c53e7d302)

**Map Page** : ![Screenshot from 2023-09-02 10-24-03](https://github.com/imrulkayessifat/dashboard/assets/41978816/db7a66cd-5837-448b-a83d-3a097fd2c39a)

**final map** : ![Screenshot from 2023-09-02 10-25-15](https://github.com/imrulkayessifat/dashboard/assets/41978816/a150e54b-f6d3-4575-9b00-85662dd0e347)

## Task
1. Project setup using Svelte / Svelte Kit and create the following routes(pages)
  -Layout
  -Chart
  -Map
   ![Screenshot from 2023-09-02 13-35-57](https://github.com/imrulkayessifat/dashboard/assets/41978816/f6b9c4c4-4163-41b9-9ec0-542a97b921a7)
   ![Screenshot from 2023-09-02 13-36-45](https://github.com/imrulkayessifat/dashboard/assets/41978816/34d09194-5b89-40b3-ba42-aa3880e16f5b)

2. Create a fullscreen layout with 6X12 grid (Figure-1) for screen width over 768 pixels and 6X4
   grid (Figure-2) for smaller devices and make it responsive as Figure-2 using tailwind grid
   related classes (without the text)
   
3. Make the Mountain sticker using plain css and place it on the appropriate grid (Make it as
   perfect as possible)

   **Hints:**
   
   -Outer Square Shape size (300px x 300px) - color (#293462)
   
   -Inner Circle (200px x 200px) - color (transparent)
   
   -Mountain - color (#fe5f55)
   
   ![Screenshot from 2023-09-02 13-38-56](https://github.com/imrulkayessifat/dashboard/assets/41978816/5c65ca03-1c4e-4dd6-8045-6b58e481cb15)

5. Create a layout for the Chart page as Figure-3
   
6. Create a svelte store named countryDataStore and get the response from this link
(https://restcountries.com/v3.1/all) and store it in the countryDataStore

7. Using countryDataStore store create a table with column Flag, Name, CIOC, UN Member
Status, Currencies(Key), Population and Languages (separated by comma for multiple value)

8. Create a Polar Area Chart based on 10 most populated countries data using Chart JS
   
   **Hints:**
  
   -Svelte Store doc (https://svelte.dev/docs/svelte-store)
   -Chart JS doc(https://www.chartjs.org/docs/latest/)
   -Get information about countries from https://restcountries.com/v3.1/all

8. Initialize an Openlayer map with full screen width and height
 
9. Download the GeoJSON file from the link below and add this GeoJSON data in the openlayer
map
https://github.com/datasets/geo-countries/blob/master/data/countries.geojson

10. Change the GeoJSON Layer color to #006a4e and set opacity to 0.75
    
   **Hints:**
  
   -Openlayer doc (https://openlayers.org/doc/quickstart.html)


## Code Deploy

If possible deploy your code to Cloudflare Pages/Netlify/Vercel etc.
Evaluation Criteria

-Functional Completeness

-Code Quality

-Performance of the app

-UI design

-Component-based design

-Git commit history
