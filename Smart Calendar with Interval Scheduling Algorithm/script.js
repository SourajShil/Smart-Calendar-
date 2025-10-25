
      // Indian Festivals and Events Data
      const indianFestivals = [
        {
          id: 1,
          title: "Republic Day",
          date: "2024-01-26",
          endDate: "2024-01-26",
          category: "national",
          priority: "high",
          description:
            "Celebration of the Constitution of India. Grand parade at Kartavya Path, New Delhi showcasing military might and cultural diversity.",
          location: "Nationwide, main event in New Delhi",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 2,
          title: "Holi",
          date: "2024-03-25",
          endDate: "2024-03-25",
          category: "religious",
          priority: "high",
          description:
            "Festival of colors celebrating victory of good over evil and arrival of spring. People play with colored powder and water.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 3,
          title: "Diwali",
          date: "2024-11-01",
          endDate: "2024-11-01",
          category: "religious",
          priority: "high",
          description:
            "Festival of Lights celebrating Lord Rama's return to Ayodhya. Homes decorated with diyas, fireworks, and sweets exchange.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 4,
          title: "Eid al-Fitr",
          date: "2024-04-11",
          endDate: "2024-04-11",
          category: "religious",
          priority: "high",
          description:
            "Marks the end of Ramadan. Celebrated with prayers, feasting, and charity. Traditional sweets like sewaiyan prepared.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Eid_Mubarak.jpeg",
        },
        {
          id: 5,
          title: "Independence Day",
          date: "2024-08-15",
          endDate: "2024-08-15",
          category: "national",
          priority: "high",
          description:
            "Commemorates India's independence from British rule. Prime Minister hoists flag at Red Fort, Delhi.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Independence%20day.jpeg",
        },
        {
          id: 6,
          title: "Ganesh Chaturthi",
          date: "2024-09-07",
          endDate: "2024-09-07",
          category: "religious",
          priority: "medium",
          description:
            "10-day festival celebrating birth of Lord Ganesha. Clay idols installed in homes and public pandals.",
          location: "Pan-India, biggest in Maharashtra",
          photo:
            "http://localhost/SmartCalendar/img/Ganesh%20Chaturthi.jpeg",
        },
        {
          id: 7,
          title: "Durga Puja",
          date: "2024-10-09",
          endDate: "2024-10-09",
          category: "religious",
          priority: "high",
          description:
            "Celebrates victory of Goddess Durga over demon Mahishasura. Elaborate pandals and cultural events.",
          location: "West Bengal, Assam, Odisha, Bihar",
          photo:
            "http://localhost/SmartCalendar/img/Durga_Puja.jpeg",
        },
        {
          id: 8,
          title: "Christmas",
          date: "2024-12-25",
          endDate: "2024-12-25",
          category: "religious",
          priority: "medium",
          description:
            "Celebration of birth of Jesus Christ. Churches decorated, carol singing, and gift exchanges.",
          location: "Nationwide, significant in Goa, Kerala, NE states",
          photo:
            "http://localhost/SmartCalendar/img/Christmas.jpeg",
        },
        {
          id: 9,
          title: "Makar Sankranti",
          date: "2025-01-14",
          endDate: "2025-01-14",
          category: "religious",
          priority: "medium",
          description:
            "Harvest festival marking sun's transition into Capricorn. Kite flying and sesame sweets.",
          location: "Nationwide, different names across states",
          photo:
            "http://localhost/SmartCalendar/img/Makar%20Sankranti.jpeg",
        },
        {
          id: 10,
          title: "Pongal",
          date: "2025-01-14",
          endDate: "2025-01-17",
          category: "religious",
          priority: "medium",
          description:
            "4-day Tamil harvest festival. Cooking Pongal dish, decorating houses, and cattle worship.",
          location: "Tamil Nadu, Sri Lanka",
          photo:
            "http://localhost/SmartCalendar/img/Pongal.jpeg",
        },
        {
          id: 11,
          title: "Republic Day",
          date: "2025-01-26",
          endDate: "2025-01-26",
          category: "national",
          priority: "high",
          description:
            "Celebration of the Constitution of India. Parade at Kartavya Path, New Delhi.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 12,
          title: "Holi",
          date: "2025-03-14",
          endDate: "2025-03-14",
          category: "religious",
          priority: "high",
          description:
            "Festival of colors celebrating spring and victory of good over evil.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 13,
          title: "Diwali",
          date: "2025-10-20",
          endDate: "2025-10-20",
          category: "religious",
          priority: "high",
          description: "Festival of Lights, victory of light over darkness.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 14,
          title: "Republic Day",
          date: "2026-01-26",
          endDate: "2026-01-26",
          category: "national",
          priority: "high",
          description: "Celebration of the Constitution of India.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 15,
          title: "Holi",
          date: "2026-03-03",
          endDate: "2026-03-03",
          category: "religious",
          priority: "high",
          description: "Festival of colors and spring celebration.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 16,
          title: "Diwali",
          date: "2026-11-08",
          endDate: "2026-11-08",
          category: "religious",
          priority: "high",
          description: "Festival of Lights with diyas and fireworks.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 17,
          title: "Republic Day",
          date: "2027-01-26",
          endDate: "2027-01-26",
          category: "national",
          priority: "high",
          description: "Constitution of India celebration.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 18,
          title: "Holi",
          date: "2027-03-22",
          endDate: "2027-03-22",
          category: "religious",
          priority: "high",
          description: "Color festival celebrating spring.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 19,
          title: "Diwali",
          date: "2027-10-29",
          endDate: "2027-10-29",
          category: "religious",
          priority: "high",
          description: "Festival of Lights and prosperity.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 20,
          title: "Republic Day",
          date: "2028-01-26",
          endDate: "2028-01-26",
          category: "national",
          priority: "high",
          description: "Indian Constitution celebration.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 21,
          title: "Holi",
          date: "2028-03-11",
          endDate: "2028-03-11",
          category: "religious",
          priority: "high",
          description: "Spring festival of colors.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 22,
          title: "Diwali",
          date: "2028-10-17",
          endDate: "2028-10-17",
          category: "religious",
          priority: "high",
          description: "Victory of light over darkness.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 23,
          title: "Republic Day",
          date: "2029-01-26",
          endDate: "2029-01-26",
          category: "national",
          priority: "high",
          description: "National constitution day.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 24,
          title: "Holi",
          date: "2029-02-28",
          endDate: "2029-02-28",
          category: "religious",
          priority: "high",
          description: "Festival of colors and joy.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 25,
          title: "Diwali",
          date: "2029-11-05",
          endDate: "2029-11-05",
          category: "religious",
          priority: "high",
          description: "Lights festival with fireworks.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
        {
          id: 26,
          title: "Republic Day",
          date: "2030-01-26",
          endDate: "2030-01-26",
          category: "national",
          priority: "high",
          description: "Celebration of Indian Republic.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Republic%20Day.jpeg",
        },
        {
          id: 27,
          title: "Holi",
          date: "2030-03-19",
          endDate: "2030-03-19",
          category: "religious",
          priority: "high",
          description: "Spring color festival.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Holi.jpeg",
        },
        {
          id: 28,
          title: "Diwali",
          date: "2030-10-26",
          endDate: "2030-10-26",
          category: "religious",
          priority: "high",
          description: "Festival of Lights celebration.",
          location: "Nationwide",
          photo:
            "http://localhost/SmartCalendar/img/Diwali.jpeg",
        },
      ];

      let events = [...indianFestivals];
      let currentDate = new Date();
      let selectedDate = "";
      let editingEventId = null;

      // DOM Elements
      const calendarGrid = document.getElementById("calendarGrid");
      const currentMonthElement = document.getElementById("currentMonth");
      const eventModal = document.getElementById("eventModal");
      const detailsModal = document.getElementById("detailsModal");

      // Initialize calendar
      document.addEventListener("DOMContentLoaded", function () {
        renderCalendar();
        setupEventListeners();
      });

      function setupEventListeners() {
        document.getElementById("prevMonth").addEventListener("click", () => {
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar();
        });

        document.getElementById("nextMonth").addEventListener("click", () => {
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar();
        });

        document.getElementById("todayBtn").addEventListener("click", () => {
          currentDate = new Date();
          renderCalendar();
        });

        document
          .getElementById("closeModal")
          .addEventListener("click", closeEventModal);
        document
          .getElementById("cancelBtn")
          .addEventListener("click", closeEventModal);
        document
          .getElementById("deleteBtn")
          .addEventListener("click", deleteEvent);
        document
          .getElementById("eventForm")
          .addEventListener("submit", saveEvent);
      }

      function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Update current month display
        currentMonthElement.textContent = `${currentDate.toLocaleString(
          "default",
          { month: "long" }
        )} ${year}`;

        // Clear previous calendar
        calendarGrid.innerHTML = "";

        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Create empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
          const emptyDay = document.createElement("div");
          emptyDay.classList.add("calendar-day");
          calendarGrid.appendChild(emptyDay);
        }

        // Create cells for each day of the month
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
          const dayElement = document.createElement("div");
          dayElement.classList.add("calendar-day");

          // Format date for this day
          const dateStr = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;

          // Check if this day is today
          if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            dayElement.classList.add("today");
          }

          // Day header with number and add button
          const dayHeader = document.createElement("div");
          dayHeader.classList.add("day-header");

          const dayNumber = document.createElement("span");
          dayNumber.classList.add("day-number");
          dayNumber.textContent = day;

          const addButton = document.createElement("button");
          addButton.classList.add("add-event-btn");
          addButton.textContent = "+";
          addButton.addEventListener("click", (e) => {
            e.stopPropagation();
            openAddEventModal(dateStr);
          });

          dayHeader.appendChild(dayNumber);
          dayHeader.appendChild(addButton);
          dayElement.appendChild(dayHeader);

          // Add events for this day
          const dayEvents = getEventsForDate(dateStr);

          // Show event count badge if there are events
          if (dayEvents.length > 0) {
            const eventCount = document.createElement("div");
            eventCount.classList.add("event-count");
            eventCount.textContent = dayEvents.length;
            dayElement.appendChild(eventCount);
          }

          // Check if this date has festivals
          const festivals = dayEvents.filter(
            (event) =>
              event.category === "festival" || event.category === "national"
          );

          if (festivals.length > 0) {
            const festivalBadge = document.createElement("div");
            festivalBadge.classList.add("festival-badge");
            festivalBadge.textContent = "🎉";
            dayElement.appendChild(festivalBadge);
          }

          // Events container
          const eventsContainer = document.createElement("div");
          eventsContainer.classList.add("events-container");

          if (dayEvents.length === 0) {
            const emptyState = document.createElement("div");
            emptyState.classList.add("empty-state");
            emptyState.textContent = "No events";
            eventsContainer.appendChild(emptyState);
          } else {
            dayEvents.forEach((event) => {
              const eventElement = document.createElement("div");
              eventElement.classList.add("event", `event-${event.category}`);

              // Add event photo thumbnail if available
              if (event.photo) {
                const eventPhoto = document.createElement("img");
                eventPhoto.classList.add("event-photo");
                eventPhoto.src = event.photo;
                eventPhoto.alt = event.title;
                eventElement.appendChild(eventPhoto);
              }

              const eventTitle = document.createElement("span");
              eventTitle.textContent = event.title;

              const eventTime = document.createElement("span");
              eventTime.classList.add("event-time");

              // Show multi-day indicator for events spanning multiple days
              if (event.endDate && event.endDate !== event.date) {
                eventTime.textContent = "📅";
              }

              eventElement.appendChild(eventTitle);
              eventElement.appendChild(eventTime);

              // Add click event to view details
              eventElement.addEventListener("click", (e) => {
                e.stopPropagation();
                openEventDetails(event);
              });

              eventsContainer.appendChild(eventElement);
            });
          }

          dayElement.appendChild(eventsContainer);
          calendarGrid.appendChild(dayElement);
        }
      }

      function getEventsForDate(dateStr) {
        return events.filter((event) => {
          const eventDate = new Date(event.date);
          const eventEndDate = new Date(event.endDate);
          const currentDate = new Date(dateStr);

          return currentDate >= eventDate && currentDate <= eventEndDate;
        });
      }

      function openAddEventModal(dateStr) {
        selectedDate = dateStr;
        document.getElementById("selectedDate").value = dateStr;
        document.getElementById("eventId").value = "";
        document.getElementById("modalTitle").textContent = "Add New Event";
        document.getElementById("deleteBtn").style.display = "none";
        editingEventId = null;

        // Reset form
        document.getElementById("eventForm").reset();
        document.getElementById("startDate").value = dateStr;
        document.getElementById("endDate").value = dateStr;
        document.getElementById("photoPreview").style.display = "none";

        eventModal.style.display = "flex";
      }

      function openEventDetails(event) {
        document.getElementById("detailsTitle").textContent = event.title;
        document.getElementById("detailsDate").textContent =
          formatEventDate(event);
        document.getElementById("detailsCategory").textContent =
          event.category.charAt(0).toUpperCase() + event.category.slice(1);
        document.getElementById("detailsLocation").textContent =
          event.location || "Not specified";
        document.getElementById("detailsPriority").textContent =
          event.priority.charAt(0).toUpperCase() + event.priority.slice(1);
        document.getElementById("detailsDescription").textContent =
          event.description || "No description available.";

        const detailsImage = document.getElementById("detailsImage");
        if (event.photo) {
          detailsImage.src = event.photo;
          detailsImage.style.display = "block";
        } else {
          detailsImage.style.display = "none";
        }

        detailsModal.style.display = "flex";
      }

      function closeEventModal() {
        eventModal.style.display = "none";
        editingEventId = null;
      }

      function closeDetailsModal() {
        detailsModal.style.display = "none";
      }

      function previewPhoto(event) {
        const file = event.target.files[0];
        const preview = document.getElementById("photoPreview");

        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      }

      function saveEvent(e) {
        e.preventDefault();

        const eventData = {
          id: document.getElementById("eventId").value || Date.now(),
          title: document.getElementById("eventTitle").value,
          date: document.getElementById("startDate").value,
          endDate: document.getElementById("endDate").value,
          category: document.getElementById("eventCategory").value,
          priority: document.getElementById("eventPriority").value,
          description: document.getElementById("eventDescription").value,
          location: document.getElementById("eventLocation").value,
        };

        // Handle photo upload
        const photoFile = document.getElementById("eventPhoto").files[0];
        if (photoFile) {
          const reader = new FileReader();
          reader.onload = function (e) {
            eventData.photo = e.target.result;
            completeSave(eventData);
          };
          reader.readAsDataURL(photoFile);
        } else {
          completeSave(eventData);
        }
      }

      function completeSave(eventData) {
        // Update or add event
        const existingIndex = events.findIndex((e) => e.id == eventData.id);
        if (existingIndex >= 0) {
          events[existingIndex] = eventData;
        } else {
          events.push(eventData);
        }

        renderCalendar();
        closeEventModal();

        // Here you would typically save to MySQL database
        saveToDatabase(eventData);
      }

      function deleteEvent() {
        if (editingEventId) {
          events = events.filter((e) => e.id != editingEventId);
          renderCalendar();
          closeEventModal();

          // Here you would typically delete from MySQL database
          deleteFromDatabase(editingEventId);
        }
      }

      function switchView(view) {
        // For this example, we only have month view
        alert(
          `Switching to ${view} view - This would show a specialized view for ${view}`
        );
      }

      function formatEventDate(event) {
        const startDate = new Date(event.date);
        const endDate = new Date(event.endDate);

        if (event.date === event.endDate) {
          return startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        } else {
          return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
        }
      }

      // Database functions (would be implemented with PHP/MySQL)
      function saveToDatabase(eventData) {
        console.log("Saving to database:", eventData);
        // Implement AJAX call to PHP backend
      }

      function deleteFromDatabase(eventId) {
        console.log("Deleting from database:", eventId);
        // Implement AJAX call to PHP backend
      }
