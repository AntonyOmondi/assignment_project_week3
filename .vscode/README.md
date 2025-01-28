
---

# Akan Name Generator

Akan Name Generator is a web-based application that generates Akan names based on a person's birth date and gender, according to the traditions of the Akan people of Ghana, Ivory Coast, and Togo. This application calculates the day of the week a person was born and assigns them an Akan name that corresponds to that day.

## Features

- **Generate Akan Names**: Input your birth date and gender to get your Akan name.
- **Responsive Design**: The app is fully responsive and works on both desktop and mobile devices.
- **User-Friendly Interface**: Simple form interface for easy user interaction.

## How to Use

1. **Enter Your Birth Date**: Choose your birth date using the date picker.
2. **Select Your Gender**: Choose either "male" or "female" from the dropdown.
3. **Click Generate**: Press the "Generate Akan Name" button to get your Akan name based on your birth date and gender.

## Files

The project consists of three main files:

1. **`index.html`**: The HTML file containing the structure of the application.
2. **`style.css`**: The CSS file responsible for the styling and layout of the application.
3. **`script.js`**: The JavaScript file that handles the logic for calculating the day of the week and generating the Akan name.

---

## Project Structure

```
/akan-name-generator
  ├── index.html          # HTML structure
  ├── style.css           # CSS for styling the application
  └── script.js            # JavaScript for generating Akan names
```

---

## Code Explanation

### `index.html`

The HTML structure includes:
- **A header section** with the title of the app and an introductory description.
- **A form** where users can input their birth date and gender to generate their Akan name.
- **A footer** with copyright information.

### `style.css`

The CSS file styles the entire page:
- **Responsive design** is implemented with media queries for mobile, tablet, and desktop screens.
- The design uses **flexbox** for layout management and ensures the page adapts well on different screen sizes.
- **Hover effects** on buttons and styled form elements for better user interaction.

### `script.js`

The JavaScript file contains:
- **Arrays for male and female Akan names**, as well as an array for the days of the week.
- **A function (`calculateDayOfWeek`)** that calculates the day of the week based on the birth date using Zeller's Congruence formula.
- **A function (`getAkanName`)** that generates the Akan name based on the calculated day of the week and gender.
- **A form handler (`generateAkanName`)** that retrieves user input and displays the result on the page.

## Demo

You can try out the Akan Name Generator by simply downloading the project files or by hosting them on any web server.
Or use the live link in my repository.

## Contributing

If you'd like to contribute to the project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
