This is a simple Star Wars listing made by me.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can:
1. Select to see Star Wars films, people, species, starships, planets and vehicles listing. Click on any button in front page.
2. To see more listing, click on the pagination button at the bottom.
3. To edit current data, click on the text, it will then change to an input textfield. After done editing, click outside the textfield to blur the focus.
4. To delete a particular item in the list, click delete button at the right of items text.
5. To add new data, click Add new [type] at the top of the page. You will be prompted with a dialog, click OK when done.

Stack/pkg:
1. ReactJS: library for building front end UIs
2. NextJS: Framework to serve ReactJS app from server side i.e Server Side Rendering.
3. Axios: HTTP client, to make API call.
4. React icons: Well...icons for ReactJS.

If I'm going to spend more time on this project, I would.
1. Make real API calls to edit and delete listing. Since I can only make a GET request to https://swapi.dev/api, editing and deleting item in list was only a mock. It only alters the array in memory, not in real DB. However, if the API is available, it can easily be done since the foundation was there already.
2. I will start with designing the UI first. A proper one, with bell and whistle. After that only I will start the development.
3. I will use Material UI. I was about to use MUI in this project, but, since I don't have much time to configure it, I have to pass.
4. At this level, I don't think redux is necessary but if the app grows I can see that redux might help.
5. I will make a proper reusable components, plus with MUI in place, it is good to have it.
6. I will display more data. Currently I only display names and titles. If we have the design to properly display the data, then I will definitely display more datas.
7. I will use custom dialog plus modal instead of browsers dialog for user input.
8. I will write tests.

This is an assignment given by Kakitangan.com.
