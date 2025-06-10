import { ExerciseList } from "./exercises.model";

const aiAndPairProgrammingExercises: ExerciseList = {
  id: "ai-and-pair-programming-exercises",
  title: "AI and Pair Programming Exercises",
  description:
    "Feel free to use AI tools to help with the exercises. You can also pair program with a partner to complete the exercises.",
  tags: ["tooling", "collaboration"],
  exercises: [
    {
      id: "ai-and-pair-programming-exercise-1",
      title: "Use AI to help with the exercises",
      description:
        "Use AI tools like ChatGPT, Copilot or any other AI tool to help you with the exercises. You can use AI to generate code, explain concepts or find solutions to problems. How did you use AI? What did you learn from it? How did it help you with the exercises? Do you think AI is a useful tool for developers?",
      tags: ["tooling", "collaboration", "discussion"],
    },
    {
      id: "ai-and-pair-programming-exercise-2",
      title: "Pair program with a partner",
      description:
        "Pair program with a partner to complete the exercises. How did you like pair programming? What did you learn from your partner? How did you help each other?",
      tags: ["tooling", "collaboration", "discussion"],
    },
  ],
};

const simpleExercises: ExerciseList = {
  id: "simple-exercises",
  title: "Simple Exercises",
  description:
    "A simple list of exercises to get started with Angular and this project. This will help you understand the basics of Angular and how to work with components. You can start with any of the exercises in this list.",
  tags: ["beginner"],
  exercises: [
    {
      id: "simple-exercise-0",
      title: "Get started with Angular",
      description:
        'There are many very great online resources to get started with Angular. You can start with the <a href="https://angular.dev/tutorials">Official Angular documentation and tutorials</a> or any other online course. This will help you understand the basics of Angular and how to work with components.',
      tags: ["beginner"],
    },
    {
      id: "simple-exercise-1",
      title: "Add more foods to the menu",
      description:
        "Add more food items to the Business Class Menu. Provide at least one more option for each course.",
      tags: ["beginner"],
    },
    {
      id: "simple-exercise-2",
      title: "Add a new tag and a color",
      description: "Add a new tag and assign it a color.",
      tags: ["beginner"],
    },
    {
      id: "simple-exercise-3",
      title: "Prefix the tag with a hashtag",
      description: "Prefix the tag with a hashtag (#).",
      tags: ["beginner"],
    },
    {
      id: "simple-exercise-4",
      title: "Add more information to the food items",
      description:
        "Add more information to the food items menu. This could include ingredients, allergens, a rating or preparation methods.",
      tags: ["beginner"],
    },
  ],
};

const intermediateExercises: ExerciseList = {
  id: "intermediate-exercises",
  title: "Intermediate Exercises",
  description:
    "A list of intermediate exercises. You can start with any of the exercises in this list.",
  tags: [],
  exercises: [
    {
      id: "intermediate-exercise-1",
      title: "Add the drinks to the menu",
      description:
        "Currently, only the food items are displayed in the Business Class Menu. Add the drinks to the menu.",
      tags: [],
    },
    {
      id: "intermediate-exercise-2",
      title: "Use Angular Material Chips to filter the menu",
      description:
        'Use <a href="https://material.angular.dev/components/chips/overview">Angular Material Chips</a> to filter the menu by tags.',
      tags: ["tooling"],
    },
    {
      id: "intermediate-exercise-3",
      title: "Use Angular Material Expansion Panel to hide menu items",
      description:
        'Use <a href="https://material.angular.dev/components/expansion/overview">Angular Material Expansion Panel</a> to hide and show menu items.',
      tags: ["tooling"],
    },
    {
      id: "intermediate-exercise-4",
      title: "Responsive Business Class Menu",
      description:
        "Make the Business Class Menu card responsive. The menu should look good on all screen sizes. Use CSS grid and CSS media queries to show the menu in a two column based layout on larger screens.",
      tags: [],
    },
    {
      id: "intermediate-exercise-5",
      title: "Add anchor links to the To Do headers",
      description:
        "Add anchor links to the To Do headers. Clicking on the header in the Summaries section should scroll to the respective list.",
      tags: [],
    },
    {
      id: "intermediate-exercise-6",
      title: "Be creative",
      description:
        "Be creative and add your own ideas to the Business Class Menu. This could include animations, images and additional features. Check out how existing Angular libraries can help you with this.",
      tags: ["tooling"],
    },
  ],
};

export const exercises: ExerciseList[] = [
  aiAndPairProgrammingExercises,
  simpleExercises,
  intermediateExercises,
  {
    id: "linter-setup",
    title: "ESLint Setup",
    description:
      "Set up a linter for your project to ensure code quality and consistency. This will help you catch errors early and maintain a clean codebase.",
    tags: ["automation", "linter", "tooling"],
    exercises: [
      {
        id: "linter-1",
        title: "Run Linter in CLI",
        description:
          "Run the linter to check for code quality issues. Use `npm run lint`.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-2",
        title: "Run Prettier in IDE",
        description:
          "Configure VS Code to run prettier automatically on save. This helps maintain code quality.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-3",
        title:
          "Update the linter to use single quotes instead of double quotes",
        description:
          "Modify the linter configuration to enforce single quotes for strings.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-4",
        title:
          "Make sure that the linter does not throw any warnings or errors",
        description:
          "Ensure that your code passes the linter without any warnings or errors. This is crucial for maintaining code quality.",
        tags: ["automation", "linter", "tooling"],
      },
    ],
  },
  {
    id: "linter-configuration",
    title: "ESLint Configuration",
    description:
      "These tasks will help you configure the linter to your liking and ensure it works correctly with your project.",
    tags: ["automation", "linter", "tooling", "collaboration"],
    exercises: [
      {
        id: "linter-5",
        title:
          "Configure the linter command to throw errors if it finds warnings",
        description:
          "Set up the CLI linter to treat warnings as errors. This will help enforce stricter code quality standards.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-6",
        title: "Only run the linter on the business-class-angular folder",
        description:
          "Configure the linter to only check files in the `business-class-angular` folder. This is only useful for projects that integrate the linter step by step.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-7",
        title: "Update the linter to warn about console logs",
        description:
          "Configure the linter to warn about console logs in the code. This will help you avoid leaving console logs in production code.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-8",
        title: "Update the linter to use no-magic-numbers",
        description:
          "Configure the linter to warn about magic numbers in the code. Find out what magic numbers are and why they are bad.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-9",
        title: "Update prettier to remove unused imports",
        description:
          "Configure Prettier to remove unused imports in the code. Do you think this is a good idea? Why or why not?",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-10",
        title: "Update the linter to use no-unused-vars",
        description:
          "Configure the linter to warn about unused variables in the code. What do you think about this rule? Is it useful?",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-11",
        title:
          "Update the linter to check if variables following the camelCase convention",
        description:
          "Configure the linter to check if variables follow the camelCase convention. How do you think this will help you?",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-12",
        title: "Ignore a specific linter rule",
        description:
          "Intentionally try to break a linter rule and then ignore it.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "linter-14",
        title: "Review Linter Configuration",
        description:
          "How do you like the linter configuration? Do you think it is useful? What would you change? Do you think your team would benefit from this linter configuration? Do you think it will improve code quality and collaboration?",
        tags: [
          "automation",
          "linter",
          "tooling",
          "collaboration",
          "discussion",
        ],
      },
      {
        id: "linter-14",
        title: "Talk to your neighbor or team about the linter configuration",
        description:
          "Talk to your neighbor or team about the linter configuration. Discuss the pros and cons of the configuration. What do you like about it? What do you dislike about it? How would you improve it? Do you think your team would benefit from this linter configuration? Does it represent your coding style?",
        tags: [
          "automation",
          "linter",
          "tooling",
          "collaboration",
          "discussion",
        ],
      },
    ],
  },
  {
    id: "scss-linter",
    title: "SCSS Linter",
    description:
      "Set up a linter for your SCSS files to ensure code quality and consistency. Configure it to enforce kebab-case",
    tags: ["automation", "linter", "tooling"],
    exercises: [
      {
        id: "scss-linter-1",
        title: "Install an SCSS linter",
        description:
          "Install an SCSS linter. Which linters did you find and which one did you choose?",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "scss-linter-2",
        title: "Configure the SCSS linter",
        description:
          "Configure the SCSS linter to enforce kebab-case for class names and IDs. This will help maintain consistency in your stylesheets.",
        tags: ["automation", "linter", "tooling"],
      },
      {
        id: "scss-linter-3",
        title: "Check if classes are actually used",
        description:
          "Does the linter provide a rule to check if classes are actually used? If not, can you find a way to check if classes are actually used?",
        tags: ["automation", "linter", "tooling", "discussion"],
      },
      {
        id: "scss-linter-4",
        title: "Explore more rules",
        description:
          "Explore the available rules in the SCSS linter and configure it to your liking. How do you like the rules? Do you think they will help you maintain a clean codebase? Do you think your team would benefit from this linter configuration?",
        tags: [
          "automation",
          "linter",
          "tooling",
          "collaboration",
          "discussion",
        ],
      },
    ],
  },
  {
    id: "storybook",
    title: "Storybook",
    description:
      "Set up Storybook for your Angular project to develop and test UI components in isolation. This will help you visualize and interact with components without running the entire application.",
    tags: ["tooling", "storybook"],
    exercises: [
      {
        id: "storybook-1",
        title: "Set up Storybook for Angular",
        description:
          "Install and configure Storybook for your Angular project. This will allow you to develop and test UI components in isolation. Use `npx storybook@latest init` to set it up. Select minimal and do not use Compdoc. Check out <a href='https://storybook.js.org/'>Storybook</a> for more information.",
        tags: ["tooling", "storybook"],
      },
      {
        id: "storybook-2",
        title: "Interact with Storybook",
        description:
          "Check that Storybook is running. Otherwise run `ng run business-class-angular:storybook` to start it. Open the Storybook UI in your browser to interact with the components. There is one example story for the Tag component. The installation and the setup are pretty easy, right?",
        tags: ["tooling", "storybook"],
      },
      {
        id: "storybook-3",
        title: "Update the Tag component`s Storybook story",
        description:
          "Modify the Storybook story for the Tag component to include different tags and colors. This will help you visualize how the component behaves with various inputs. Did you try using some very long tag names? Did you try using a lot of tags? How does the component behave? Does it look good? Does it work as expected?",
        tags: ["tooling", "storybook"],
      },
      {
        id: "storybook-4",
        title: "Add a Storybook story for the Exercise component",
        description:
          "Create a new Storybook story for the Exercise component. Are you running into any problems?",
        tags: ["tooling", "storybook"],
      },
      {
        id: "storybook-5",
        title:
          "Split the Exercise component into a container and a presentational component",
        description:
          "Refactor the Exercise component into a container component that handles logic and a presentational component that displays the UI. This will improve separation of concerns and make the code more maintainable. You should use input and output properties to communicate between the two components.",
        tags: ["tooling", "storybook", "decoupling"],
      },
      {
        id: "storybook-6",
        title: "Add a Storybook story for the Exercise presentation component",
        description:
          "Create a new Storybook story for the Exercise presentational component. This will allow you to visualize how the component looks and behaves with different inputs.",
        tags: ["tooling", "storybook"],
      },
      {
        id: "storybook-7",
        title: "Add a Storybook story for the Exercise container component",
        description:
          "Container components are much more difficult to test in Storybook. You can either ignore them or mock dependencies and provide them in your stories. This will allow you to visualize how the component behaves with different inputs and interactions.",
        tags: ["tooling", "storybook", "optional", "advanced"],
      },
      {
        id: "storybook-8",
        title: "Review Storybook stories",
        description:
          "Review the Storybook stories you created. Are they useful? Do they help you visualize and interact with the components? How do you like the separation of concerns between container and presentational components? Do you think Storybook is a useful tool for your project?",
        tags: ["tooling", "storybook", "discussion"],
      },
    ],
  },
  {
    id: "Stacked Smaller PRs",
    title: "Stacked Smaller PRs",
    description:
      "Learn how to split one pull request (PR) into multiple, smaller PRs to make code reviews easier and more efficient. This task will work on stacked PRs where each PR builds on the previous one.",
    tags: ["collaboration"],
    exercises: [
      {
        id: "stacked-prs-1",
        title: "Create a new branch for our feature",
        description:
          "Create a new branch for the feature we are working on. Go to the new branch.",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-2",
        title: "Add Post Starter with checkbox icon",
        description:
          "Add a new course to the Business Class Menu between Starter and Main, called Post Starter. Since the Post Starter only has one item, it is displayed with a checkbox icon. You do not have to implement any checkbox functionality, just display the icon.",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-3",
        title: "Create PR",
        description:
          "Create the PR. Do you see any improvements to make the PR smaller?",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-4",
        title: "Create two PRs from your main branch",
        description:
          "We'll split the PR into two smaller PRs. Therefore, we will create two branches from the main branch. The first branch will contain the checkbox icon, the second branch will contain the Post Starter.",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-6",
        title: "Create a PR for the checkbox icon",
        description:
          "Create a PR for the checkbox icon. This should only contain the changes related to the checkbox icon. Do not include anything Post Starter related in this PR.",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-5",
        title: "Create a PR for the Post Starter",
        description:
          "Merge the latest version of your last branch into the new PR. Make the changes and create a PR for the Post Starter.",
        tags: ["collaboration"],
      },
      {
        id: "stacked-prs-7",
        title: "Review the PRs",
        description:
          "You just created two smaller PRs by splitting changes into branches that build on each other.<br>Review your PRs. Are the PRs smaller and easier to review? What do you like about the smaller PRs? What do you dislike about the smaller PRs?",
        tags: ["collaboration", "discussion"],
      },
    ],
  },
  {
    id: "Separated Smaller PRs",
    title: "Separated Smaller PRs",
    description:
      "Learn how to split one pull request (PR) into multiple, smaller PRs to make code reviews easier and more efficient. This task will work on separated PRs where each PR is independent of the others.",
    tags: ["collaboration"],
    exercises: [
      {
        id: "separated-prs-1",
        title: "Create a new branch for our feature",
        description:
          "Create a new branch for the feature we are working on. Go to the new branch.",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-2",
        title: "Make changes",
        description:
          "You can decide between two options for this task.<br>A: You want to update your tags. Update the vegetarian tag color and use &lt;sub&gt; for the tag content.<br>B (more complex): Add the drink menu to the Business Class Menu. Make sure that all items are animated when the menu is opened. Use the component animation feature of Angular.",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-3",
        title: "Create PR",
        description:
          "Create the PR. Do you see any improvements to make the PR smaller?",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-4",
        title: "Create two PRs from your main branch",
        description:
          "We'll split the PR into two smaller PRs by implementing the requirements separately. Therefore, we will create two branches from the main branch.",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-6",
        title: "Create a PR for the vegetarian tag color (Option A)",
        description:
          "On one branch, update the color of the vegetarian tag and create the PR.",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-5",
        title: "Create a PR for the sub tag (Option A)",
        description:
          "On a separated branch, update the tag to use &lt;sub&gt; for the content and create the PR.",
        tags: ["collaboration"],
      },
      {
        id: "separated-prs-7",
        title: "Review the PRs",
        description:
          "You just created two smaller PRs from one big PR by implementing two different requirements in separated branches that can be reviewed independently.<br>Review your PRs. Are the PRs smaller and easier to review? What do you like about the smaller PRs? What do you dislike about the smaller PRs?",
        tags: ["collaboration", "discussion"],
      },
    ],
  },

  {
    id: "pr-theory",
    title: "Pull Request Theory",
    description:
      "Think about Pull Requests, how you handle them and how you like them. This section is not about coding but about the process of working with Pull Requests in a team.",
    tags: ["collaboration", "discussion"],
    exercises: [
      {
        id: "pr-theory-1",
        title: "What do you check in a PR?",
        description:
          "Think about what you check in a PR. What do you look for? How do you handle conflicts? How do you handle comments? How do you handle feedback?",
        tags: ["collaboration", "discussion"],
      },
      {
        id: "pr-theory-2",
        title: "What do you like about PRs?",
        description:
          "Think about what you like about PRs. Do you like the code review process? Do you like the collaboration? Do you like the feedback?",
        tags: ["collaboration", "discussion"],
      },
      {
        id: "pr-theory-3",
        title: "How can tools help you with PRs?",
        description:
          "Think about how tools can help you with PRs. Do you use any tools to help you with PRs? Do you think that tools could have found the same things that you found in the PR? How do you think tools can help you with PRs?",
        tags: ["collaboration", "discussion", "tooling"],
      },
    ],
  },
  {
    id: "decoupling",
    title: "Decouple Business Class Menu",
    description:
      "Decouple the Business Class Menu component into smaller components and services. This will help you understand how to break down a component into smaller, reusable parts and how to work with async data in Angular.",
    tags: ["decoupling"],
    exercises: [
      {
        id: "decoupling-1",
        title: "Data",
        description:
          "Create a `menu.ts` file that exports the Business Class Menu interfaces. This file should define the structure of the menu data, including food items and drinks.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-2",
        title: "Mock Data",
        description:
          "Create a `menu.mock.ts` file that exports mock data for the Business Class Menu. This file should provide sample data for food items and drinks, which can be used in the application.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-3",
        title: "Service",
        description:
          "Create a `menu.service.ts` file that exports a service for the Business Class Menu. This service should provide methods to fetch the menu data. Use the mock data from the previous step.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-4",
        title: "Breaking down async data",
        description:
          "Create a sub component for the business-class-menu component where the `async` pipe and `Oservable` are not used. The `async` pipe and the `Observable` are still used in the parent component. This will help you understand how to work with async data in Angular. Use `input` and `output` for communication between the components.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-5",
        title: "Divide component into sub components",
        description:
          "Divide the business-class-menu component into sub components. This will help you understand how to break down a component into smaller components. Create at least one sub component for the search and one sub component for the menu items. Use `input` and `output` for communication between the components.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-6",
        title: "Use content projection to split components",
        description:
          "Save your progress so far. Now, use content projection to split the components. This will help you understand how to use content projection in Angular. Use `ng-content` to project the content from the parent component to the child component.",
        tags: ["decoupling"],
      },
      {
        id: "decoupling-7",
        title: "input and output vs content projection",
        description:
          "Compare the use of `input` and `output` properties with content projection. Understand the differences and when to use each approach. This will help you understand how to communicate between components in Angular.",
        tags: ["decoupling", "discussion"],
      },
    ],
  },
  {
    id: "decouple-shared-components",
    title: "Decouple Shared Components",
    description:
      "DRY (Don't Repeat Yourself) is a principle in software development that aims to reduce the repetition of code. Sometimes, it is ok to repeat code to reduce complexity and decouple components. This decision should be intentional. In this task, you will learn how to decouple shared components.",
    tags: ["decoupling"],
    exercises: [
      {
        id: "decouple-shared-components-1",
        title: "Update Business Class Menu tag style",
        description:
          "There is a new requirement. Tags should now have a border and be underlined. Update the Business Class Menu tag style to reflect this change.",
        tags: ["decoupling"],
      },
      {
        id: "decouple-shared-components-2",
        title: "Keep Exercise tag style",
        description:
          "The tag style is now updated in the Business Class Menu. However, the tag is also used in the Exercise component. The Exercise component looks different now but this was not part of the new requirement. The different tag style should only be applied to the Business Class Menu tag. Update the tag so that it can be used in both components without changing the style of the Exercise component.",
        tags: ["decoupling"],
      },
      {
        id: "decouple-shared-components-3",
        title: "Decouple the tag component",
        description:
          "The tag component is now used in both components. However, the tag component is more complex now and has different styles for the Business Class Menu and the Exercise component. The tag component should be decoupled into two separate components: one for the Business Class Menu and one for the Exercise component. Create two new components: `business-class-menu-tag` and `exercise-tag`. Move the tag logic and styles to the respective components.",
        tags: ["decoupling"],
      },
      {
        id: "decouple-shared-components-4",
        title: "Review the decoupled components",
        description:
          "You just decoupled the tag component into two separate components but also duplicated some code. This is ok, because the components are now decoupled, can be used independently and are not so complex. Review the components and think about how you would handle this in a real-world scenario. Would you keep the components decoupled or would you try to reduce the duplication? How would you handle this in a real-world project?",
        tags: ["decoupling", "discussion"],
      },
      {
        id: "decouple-shared-components-5",
        title: "Reduce code duplication by sharing only what is needed",
        description:
          "Create a third component called `tag-base`. This component should contain only the common logic and styles for the tag component. The base increases coupling but reduces code duplication. Do you think this is a good idea? Why or why not?",
        tags: ["decoupling"],
      },
    ],
  },
  {
    id: "multiple-configurations",
    title: "Multiple Environment Configurations",
    description:
      "Learn how to use Angular configurations to provide different settings for different environments. These tasks will focus on showing different exercises based on the configuration you use to run your application.",
    tags: ["tooling"],
    exercises: [
      {
        id: "multiple-configurations-1",
        title: "Set a file replacement",
        description:
          "Set up fileReplacement in the `angular.json` file. Replace the exercises.mock.ts with the exercises-fake.mock.ts file in the configuration > development.",
        tags: ["tooling"],
      },
      {
        id: "multiple-configurations-2",
        title: "Rerun your application",
        description:
          "You might have to rerun your application to see the changes. Run `ng serve` again and check if the exercises are loaded from the `exercises-fake.mock.ts` file.",
        tags: ["tooling"],
      },
      {
        id: "multiple-configurations-3",
        title: "New configuration",
        description:
          "Instead of using the development configuration, create a new configuration called `mock` that uses the `exercises-fake.mock.ts` file. Update the npm run script to use this configuration by passing the `--configuration=mock` option to the `ng serve` command.",
        tags: ["tooling"],
      },
      {
        id: "multiple-configurations-4",
        title: "Make it better",
        description:
          "Instead of directly replacing the `exercises.mock.ts` file, create environemnt files for the different configurations. Create a new file called `environment.ts` and `environment.mock.ts` in the `src/environments` folder and add the mock data to it. Update the `angular.json` file to use this file for the `mock` configuration. Update the exercises.service.ts file to import the exercises from the environment file.",
        tags: ["tooling"],
      },
      {
        id: "multiple-configurations-5",
        title: "Run and review the configuration",
        description:
          "Run the application without and with the mock configuration. Review the application and check if the exercises are loaded from the `exercises-fake.mock.ts` file. Do you think this is a good way to provide different settings for different environments? How would you improve it?",
        tags: ["tooling", "discussion"],
      },
    ],
  },
  {
    id: "run-docker",
    title: "Run in Docker",
    description:
      "Learn how to use Docker with your Angular application. Running docker containers is a great way to ensure that your application runs consistently across different environments and can help with running tests and deployments in your CI/CD pipeline.",
    tags: ["tooling", "docker", "automation"],
    exercises: [
      {
        id: "docker-1",
        title: "Install Docker",
        description:
          "Install Docker on your machine. Follow the instructions on the official Docker website for your operating system.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-2",
        title: "Create a Dockerfile",
        description:
          "Create a Dockerfile in the root of your Angular project. This file will define how to build and run your application in a Docker container. If you're not sure how to create a Dockerfile, you can find examples online. Make sure to include the `npm ci` command and the `ng serve --host 0.0.0.0` command to serve your Angular application.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-3",
        title: "Build the Docker image",
        description:
          "Use the Docker CLI to build the Docker image for your Angular application. Run `docker build -t business-class-angular .` in the terminal.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-4",
        title: "Run the Docker container",
        description:
          "Run the Docker container for your Angular application. Use the command `docker run -p 4200:4200 business-class-angular` to map port 4200 on your host machine to port 4200 in the container.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-5",
        title: "Access the application in the browser",
        description:
          "Open your web browser and navigate to `http://localhost:4200` to see your Angular application running in a Docker container. This is only an example, do not use this in production.",
        tags: ["tooling", "docker", "automation"],
      },
    ],
  },
  {
    id: "test-docker",
    title: "Validate in Docker",
    description:
      "Learn how to use Docker to run tests and lints for your Angular application. This can be used in your CI/CD pipeline.",
    tags: ["tooling", "docker", "automation"],
    exercises: [
      {
        id: "docker-1",
        title: "Install Docker",
        description:
          "Install Docker on your machine. Follow the instructions on the official Docker website for your operating system.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-2",
        title: "Create a Dockerfile",
        description:
          "Create a Dockerfile in the root of your Angular project. If you're not sure how to create a Dockerfile, you can find examples online. Make sure to include the `npm ci` command and the `npm run test` command that runs your Angular application test in the docker container.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-3",
        title: "Build the Docker image",
        description:
          "Use the Docker CLI to build the Docker image for your Angular application. Run `docker build -t business-class-angular-test .` in the terminal.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-4",
        title: "Run the Docker container tests",
        description:
          "Run the Docker container for your Angular application. Use the command `docker run business-class-angular-test` to run the tests in the container.",
        tags: ["tooling", "docker", "automation"],
      },
      {
        id: "docker-5",
        title: "Run lints in the Docker container",
        description:
          "Change the Dockerfile to run lints in the container. You have to rebuild and rerun the container to see the changes.",
        tags: ["tooling", "docker", "automation", "optional"],
      },
      {
        id: "docker-6",
        title: "Use multi-stage builds",
        description:
          "Use multi-stage builds to run the lints and tests from the same Dockerfile.",
        tags: ["tooling", "docker", "automation", "optional", "advanced"],
      },
      {
        id: "docker-7",
        title: "Review the Docker setup",
        description:
          "Review the Docker setup you created. Do you think it is useful? How would you improve it? Do you think it will help you run tests and lints in your CI/CD pipeline?",
        tags: ["tooling", "docker", "automation", "discussion"],
      },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    description: "Learn how to write tests for your Angular application.",
    tags: ["testing", "collaboration"],
    exercises: [
      {
        id: "testing-1",
        title: "Run unit tests",
        description:
          "Run `npm run test` to run the unit tests for your Angular application. Find the test files in the code and understand how they work.",
        tags: ["testing"],
      },
      {
        id: "testing-2",
        title: "Update the exercise service unit test",
        description:
          "Write a unit test that checks that if `testing` is provided as a tag that the color matches #FF980088.",
        tags: ["testing"],
      },
      {
        id: "testing-3",
        title: "Write a test that tests empty `tagsWithoutList`",
        description:
          "Write a test that checks `tagsWithoutList` with empty tags and a list that return empty tags. This is a simple test.",
        tags: ["testing"],
      },
      {
        id: "testing-4",
        title: "Write a test that tests duplicated `tagsWithoutList`",
        description:
          "Write a test that checks `tagsWithoutList` where the list has the same tags as the exercise. The result should be empty.",
        tags: ["testing"],
      },
      {
        id: "testing-5",
        title: "No duplicated ids in 'exercises'",
        description:
          "Write a test that tests that the tags do not have any duplicated ids.",
        tags: ["testing"],
      },
      {
        id: "testing-6",
        title: "Validate tests by changing the service",
        description:
          "Your tests should fail if you change the service. Change the service to return a different color for the `testing` tag. The test should fail. This is a good way to validate that your tests are working correctly. Undo the change in the service to make the tests pass again.",
        tags: ["testing"],
      },
      {
        id: "testing-7",
        title: "Write a component that tests html",
        description:
          "Go to the `tag.component.spec.html` test file. Write a test that check that all tag names are displayed in the tag component. Use the `getByText` method to check that the tags are displayed correctly.",
        tags: ["testing"],
      },
      {
        id: "testing-8",
        title: "Write a test that checks the .tag class",
        description:
          "Write a test that checks that the `.tag` class is applied to the tag component. Use the `getByTestId` method to check that the class is applied correctly.",
        tags: ["testing"],
      },
      {
        id: "testing-9",
        title: "Write a test that checks the tag color",
        description:
          "Write a test that checks that the tag color is applied correctly.",
        tags: ["testing"],
      },
      {
        id: "testing-10",
        title: "Review the tests",
        description:
          "Make sure `npm run test` does not fail. Review the tests you wrote. Are they useful? Do they cover all edge cases? Do you think they will help you catch bugs in the future? How would you improve them? How do tests improve collaboration in your team?",
        tags: ["testing", "collaboration", "discussion"],
      },
    ],
  },
  {
    id: "tdd",
    title: "Test Driven Development (TDD)",
    description:
      "Learn how to use Test Driven Development (TDD) to write tests before implementing the functionality. We will use the `tag.component.ts` file as an example.",
    tags: ["testing"],
    exercises: [
      {
        id: "tdd-1",
        title: "Prefixed hashtag in the tag component",
        description:
          "Write a test that checks that the tag component is displayed with a prefixed hashtag. The tag should be displayed as `#tagname`. Only write the test, do not update the component yet.",
        tags: ["testing"],
      },
      {
        id: "tdd-2",
        title: "Notice test failure",
        description:
          "Check that the test fails. The tag component should not display the prefixed hashtag yet. This is expected, because we have not implemented the functionality yet.",
        tags: ["testing"],
      },
      {
        id: "tdd-3",
        title: "Update the tag component",
        description:
          "Update the tag component to display the prefixed hashtag. Use the `#` character before the tag name in the template. Make sure that the test passes now.",
        tags: ["testing"],
      },
      {
        id: "tdd-4",
        title: "Review the TDD process",
        description:
          "Review the TDD process you just went through. Do you think it is useful? Do you think it helps you write better code? How would you improve it?",
        tags: ["testing", "discussion"],
      },
      {
        id: "tdd-5",
        title: "Consider course name for search",
        description:
          "Write a test that checks that typing Starter in the search input filters the Business Class Menu to show the options in the Starter course. Only write the test, do not update the component yet.",
        tags: ["testing", "advanced"],
      },
      {
        id: "tdd-6",
        title: "Update search logic",
        description:
          "Update the search logic to include the course name in the search. Make sure that the test passes now.",
        tags: ["testing", "advanced"],
      },
    ],
  },
  {
    id: "misc",
    title: "Misc",
    description:
      "This section contains miscellaneous tasks that do not fit into the other sections. They are optional and out of scope for this workshop but can be useful for your project.",
    tags: ["advanced", "optional"],
    exercises: [
      {
        id: "misc-1",
        title: "Integrate Playwright for E2E testing",
        description:
          "Integrate Playwright into your Angular project for end-to-end testing. This will help you test your application in a real browser environment. Follow the instructions on the official <a href='https://playwright.dev/'>Playwright</a> website to set it up.",
        tags: ["testing", "automation", "tooling"],
      },
      {
        id: "misc-2",
        title: "Use nx for monorepo management",
        description:
          "If you are working on a larger project, consider using <a href='https://nx.dev/'>Nx</a> for monorepo management. Nx provides powerful tools for managing multiple applications and libraries in a single repository. It can help you with code sharing, testing and building your applications.",
        tags: ["tooling", "decoupling", "advanced"],
      },
      {
        id: "misc-3",
        title: "Use NgRx for state management",
        description:
          "If you are working on a larger project, consider using <a href='https://ngrx.io/'>NgRx</a> for state management. NgRx provides a powerful way to manage state in your Angular application using the Redux pattern. It can help you with managing complex state and side effects in your application.",
        tags: ["tooling", "advanced"],
      },
      {
        id: "misc-4",
        title: "Mock API calls with mocked services for fast local development",
        description:
          "Consider using mocked services to mock API calls for fast local development. This will help you develop your application without relying on a real backend. Different configurations can be used to switch between mocked and real services.",
        tags: ["decoupling", "collaboration"],
      },
    ],
  },
];
