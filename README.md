# Digital Clock & Alarm Web Application

## Overview

This web application provides a real-time digital clock display and allows users to set multiple alarms. It is built using HTML5, CSS3, JavaScript (ES6), and jQuery, with a responsive layout using Bootstrap. The UI features a Glassmorphism design.

## Features

*   **Real-time Digital Clock:** Displays the current time in HH:MM:SS AM/PM format.
*   **Multiple Alarms:** Users can set multiple alarms with specific times and labels.
*   **Alarm List:** Shows a list of active alarms with options to delete or cancel them.
*   **Notifications:** Triggers browser notifications when an alarm goes off (if permission is granted).
*   **Sound Alarm:** Plays a sound alarm (alarm.mp3) when an alarm is triggered.
*   **Glassmorphism UI:** Stylish frosted glass panels with transparency and shadows.
*   **Responsive Layout:** Mobile-friendly design using Bootstrap grid system.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript ES6
*   jQuery 3.7.0
*   Bootstrap 4.5.2
*   Google Fonts (Rajdhani)

## Files Included

*   `index.html`: Main HTML file.
*   `style.css`: CSS file for styling.
*   `script.js`: JavaScript file for functionality.
*   `alarm.mp3`: Placeholder audio file for the alarm sound.

## Setup

1.  Clone the repository to your local machine.
2.  Ensure you have a web browser (Chrome, Firefox, Edge) installed.
3.  Open `index.html` in your web browser.

## Usage

1.  The digital clock will display the current time automatically.
2.  To set an alarm:
    *   Enter the desired hour and minute.
    *   Select AM or PM.
    *   Add a label for the alarm (optional).
    *   Click the "Set Alarm" button.
3.  The alarm will be added to the "Active Alarms" list.
4.  When an alarm is triggered:
    *   A browser notification will appear (if permissions are granted).
    *   The `alarm.mp3` sound will play.
    *   The triggered alarm will be highlighted in the list.
    *   Click the "Stop" button to stop the alarm sound and remove the highlight.
5.  To delete an alarm, click the "Delete" button next to the alarm in the list.
6.  To clear all alarms, click the "Clear All Alarms" button.

## Additional Notes

*   Alarms remain listed until deleted, even after they trigger.
*   The `alarm.mp3` file should be replaced with your desired alarm sound.
*   The application is designed for cross-browser compatibility (Chrome, Firefox, Edge).

## Author

*   Deboraj-roy