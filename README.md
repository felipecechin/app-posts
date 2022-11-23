## Front End Test Project
The application was built using the following technologies:
- Next.js;
- React;
- Typescript.

For styling, Tailwind CSS was used.

Node version used: v16.14.2

## Running application
To run the application, follow these steps:

1. Create .env file based on .env.example file and define API URL;
    
    - In my case, the URL was used: https://sample-posts.coderockr.com

2. Run `yarn` command to install dependencies;
3. Run `yarn dev` to run the application.

It is also possible to use the production version of the application. 
        - In this case, run the command `yarn build` and then `yarn start`.

## Packages used
- `dayjs`: used to format dates;
- `react-icons`: used to show icons;
- `react-infinite-scroll-component`: used to implement infinite scroll functionality;
- `sweetalert2`: used to show alert in case of error;
- `sharp`: used for image optimization by Next.js;
- `@headlessui/react`: used to show form contact modal.

In the development environment, `prettier` and `eslint` were used for formatting and code analysis.