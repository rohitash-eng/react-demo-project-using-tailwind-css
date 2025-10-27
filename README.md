# React Demo Project using Tailwind CSS

This is a **React Demo Project using Tailwind CSS**. I have created a small project that utilizes various Tailwind utility classes, helping you learn Tailwind CSS easily through hands-on practice. It serves as a hands-on guide to understanding and using various Tailwind utility classes, from basic setup to more advanced concepts like group-hover and @apply.

-----

## 🖼️ First review project screenshot
![Project Screen](https://your-image-url.com/screenshot.png)

-----

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js] [npm] [npx] [vscode](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/rohitash-eng/react-demo-project-using-tailwind-css.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd react-demo-project-using-tailwind-css
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

-----

## 🧠 What I Learned

This project demonstrates several key concepts and utility classes in Tailwind CSS.

### 1\. Project Setup (React + Vite + Tailwind)

This project was set up using Vite, React, and the Tailwind CSS v4 developer preview.

1.  **Create a new Vite + React project:**

    ```bash
    # Choose 'react' and 'react-swc' in the prompts
    npm create vite@latest my-project
    cd my-project
    ```

2.  **Install Tailwind CSS (v4+):**

    ```bash
    npm install tailwindcss @tailwindcss/vite
    ```

3.  **Update `vite.config.js`** to include the Tailwind plugin:

    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'
    import tailwindcss from '@tailwindcss/vite' // <-- Import

    export default defineConfig({
      plugins: [
        react(),
        tailwindcss(), // <-- Add plugin
      ],
    })
    ```

4.  **Add the main Tailwind import** to your global CSS file (e.g., `src/index.css`):

    ```css
    /* src/index.css */
    @import "tailwindcss";

    /* ... your other base styles (if any) */
    ```

5.  **Start the dev server** and begin using Tailwind classes:

    ```bash
    npm run dev
    ```

### 2\. Common Styling Utilities

  * **Centering with Flex:**

    ```html
    <div class="flex items-center justify-center h-screen">
      <p class="text-center">Centered content</p>
    </div>
    ```

  * **Rounded Elements (Circle):**

    ```html
    <span class="w-10 h-10 bg-blue-500 rounded-full inline-block"></span>
    ```

  * **Custom/Arbitrary Colors:**

    ```html
    <div class="bg-[#ccc] p-4 rounded">Custom Hex Color</div>
    <div class="bg-[#123234]">Custom teal shade</div>

    <div class="bg-[rgba(0,0,0,0.5)] p-4 rounded">RGBA Background</div>

    <div class="bg-[hsl(200,100%,50%)]">Blue hue</div>
    ```

  * **Borders & Shadows:**

    ```html
    <div class="border-b border-solid border-gray-300"></div>

    <div class="shadow-[0_2px_5px_rgba(0,0,0,0.16),_0_2px_10px_rgba(0,0,0,0.12)]"></div>
    ```

  * **Sizing and Layout:**

    ```html
    <div class="flex max-w-[500px] bg-gray-100 p-4">
      <p>Content with max-width 500px</p>
    </div>

    <div class="flex">
      <div class="basis-full">This element takes 100% width</div>
    </div>
    ```

  * **Positioning:**

    ```html
    <div class="relative">
      <div class="absolute top-0 left-0">Absolute child</div>
    </div>
    ```

  * **Using `!important`:**

    ```html
    <p class="!text-red-500">Important Red Text</p>
    ```

### 3\. Advanced Hover Effects

  * **Child-targeting on Parent Hover:**
    Apply a style to all `<li>` children when the parent `<ul>` is hovered using the `[&>li]` selector.

    ```html
    <ul class="hover:[&>li]:bg-gray-200">
      <li class="p-2">Item 1</li>
      <li class="p-2">Item 2</li>
      <li class="p-2">Item 3</li>
    </ul>
    ```

  * **Show Element on Hover (`group-hover`):**
    Show a hidden search input when its parent container is hovered.

    ```jsx
    // Use 'group' on the parent
    <div className="main-class group">
      {/*
        'sr-only' hides the div accessibly.
        'group-hover:not-sr-only' makes it visible when the parent 'group' is hovered.
      */}
      <div className="sr-only input-search group-hover:not-sr-only">
        <input type="text" name="search" id="se" placeholder='search' />
      </div>
      <button className='cursor-pointer bg-red-500'>
        Search
      </button>
    </div>
    ```

### 4\. Writing Cleaner Code (Q\&A)

  * **Q: How to remove repeated padding classes like `pt-[12px] pb-[12px] pl-[24px] pr-[24px]`?**

  * **A:** Use Tailwind's padding shorthand classes:

      * `px-[24px]` (for `padding-left` and `padding-right`)
      * `py-[12px]` (for `padding-top` and `padding-bottom`)

    **Example:**

    ```html
    <li class="pt-[12px] pb-[12px] pl-[24px] pr-[24px]">...</li>

    <li class="px-[24px] py-[12px]">...</li>
    ```

  * **Q: I still have to write the same classes (`px-[24px] py-[12px] hover:bg-gray-200...`) on *every* `li`. Any solution?**

  * **A:** Yes, use the `@apply` directive in your CSS file to create a custom utility class.

    **1. In your HTML/JSX:**
    Give your elements a custom class name (e.g., `nav-item`).

    ```jsx
    <ul className='flex items-center'>
      <li className='nav-item'>Home</li>
      <li className='nav-item'>Band</li>
      <li className='nav-item'>Contact</li>
      <li className='nav-item'>More</li>
    </ul>
    ```

    **2. In your CSS file (e.g., `src/index.css`):**
    Use `@apply` to bundle all the utilities into your new `.nav-item` class.

    ```css
    @import "tailwindcss";

    /* ... */

    .nav-item {
      @apply px-[24px] py-[12px] hover:bg-gray-200 hover:text-black cursor-pointer;
    }
    ```

-----

## 🧑‍💻 Author

**Rohitash Singh**

  * Frontend Developer
  * Javascript Developer

-----

## 📜 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

