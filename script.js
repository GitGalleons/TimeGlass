$(document).ready(function() {
    // Real-time clock
    function updateClock() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        $('#clock').text(time);
    }

    setInterval(updateClock, 1000);

    // Alarm functionality
    let alarms = [];

    $('#set-alarm').click(function() {
        let hour = $('#alarm-hour').val();
        let minute = $('#alarm-minute').val();
        let ampm = $('#alarm-ampm').val();
        let label = $('#alarm-label').val();

        if (hour && minute && ampm) {
            let alarmTime = hour + ':' + minute + ' ' + ampm;
            alarms.push({time: alarmTime, label: label});
            updateAlarmList();
            $('#alarm-hour').val('');
            $('#alarm-minute').val('');
            $('#alarm-label').val('');
        } else {
            alert('Please fill in all alarm details.');
        }
    });

    function updateAlarmList() {
        let alarmList = $('#alarm-list tbody');
        alarmList.empty();

        alarms.forEach(function(alarm, index) {
            alarmList.append(`
                <tr>
                    <td>${alarm.time}</td>
                    <td>${alarm.label || 'Alarm'}</td>
                    <td>
                        <button class="btn btn-danger btn-sm delete-alarm" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    // Delete alarm
    $('#alarm-list').on('click', '.delete-alarm', function() {
        let index = $(this).data('index');
        alarms.splice(index, 1);
        updateAlarmList();
    });

    // Clear all alarms
    $('#clear-alarms').click(function() {
        alarms = [];
        updateAlarmList();
    });

    // Check alarms
    function checkAlarms() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes < 10 ? '0' + minutes : minutes;

        let currentTime = hours + ':' + minutes + ' ' + ampm;

        alarms.forEach(function(alarm, index) {
            if (alarm.time === currentTime) {
                triggerAlarm(alarm, index);
            }
        });
    }

    setInterval(checkAlarms, 1000);

    // Trigger alarm
    function triggerAlarm(alarm, index) {
        // Browser notification
        if (Notification.permission === "granted") {
            new Notification('Alarm: ' + alarm.label, {
                body: 'Time to wake up!',
                icon: 'alarm.png' // Replace with your icon
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    new Notification('Alarm: ' + alarm.label, {
                        body: 'Time to wake up!',
                        icon: 'alarm.png' // Replace with your icon
                    });
                }
            });
        }

        // Play sound
        let audio = new Audio('alarm.mp3');
        audio.play();

        // Highlight triggered alarm
        $('#alarm-list tbody tr').eq(index).addClass('alarm-triggered');

        // Stop sound and remove highlight
        $('#alarm-list tbody tr').eq(index).append(`
            <td>
                <button class="btn btn-success btn-sm stop-alarm" data-index="${index}">Stop</button>
            </td>
        `);

        $('#alarm-list').on('click', '.stop-alarm', function() {
            audio.pause();
            audio.currentTime = 0;
            $('#alarm-list tbody tr').eq(index).removeClass('alarm-triggered');
            $(this).parent().remove();
        });
    }
});