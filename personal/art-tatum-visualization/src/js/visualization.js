// Wait for both scripts to load
document.addEventListener("DOMContentLoaded", () => {
  // Ensure MASTERPIECES and MILESTONES are available
  if (
    typeof MASTERPIECES === "undefined" ||
    typeof MILESTONES === "undefined"
  ) {
    console.error("Data not loaded properly");
    return;
  }

  const data = {
    masterpieces: MASTERPIECES,
    milestones: MILESTONES,
  };

  let currentCollection = "";
  let selectedVolumes = [];

  // Get all available volumes for a collection
  const getAvailableVolumes = (collection) => {
    return Object.keys(data[collection]).sort();
  };

  // Get all tracks for selected volumes
  const getSelectedTracks = () => {
    if (!currentCollection || selectedVolumes.length === 0) return [];

    const tracks = [];
    selectedVolumes.forEach((volume) => {
      if (data[currentCollection][volume]) {
        tracks.push(...data[currentCollection][volume]);
      }
    });

    return tracks;
  };

  // Toggle element visibility with smooth transition
  const toggleElementVisibility = (element, show) => {
    if (show) {
      element.classList.remove("hidden");
      setTimeout(() => {
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
      }, 10);
    } else {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
      setTimeout(() => {
        element.classList.add("hidden");
      }, 500);
    }
  };

  // Handle collection selection
  const handleCollectionChange = () => {
    const collectionSelect = document.getElementById("collection-select");
    const volumesContainer = document.getElementById("volumes-container");
    const tracksPanel = document.getElementById("tracks-panel");

    currentCollection = collectionSelect.value;
    selectedVolumes = [];

    // Clear and hide tracks panel
    toggleElementVisibility(tracksPanel, false);

    // If no collection selected, hide volumes
    if (!currentCollection) {
      toggleElementVisibility(volumesContainer, false);
      return;
    }

    // Show volumes container
    toggleElementVisibility(volumesContainer, true);

    // Generate volume checkboxes
    const volumesCheckboxes = document.getElementById("volumes-checkboxes");
    volumesCheckboxes.innerHTML = "";

    const volumes = getAvailableVolumes(currentCollection);
    volumes.forEach((volume) => {
      const checkboxItem = document.createElement("div");
      checkboxItem.className = "checkbox-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${volume}-checkbox`;
      checkbox.value = volume;
      checkbox.addEventListener("change", handleVolumeSelection);

      const label = document.createElement("label");
      label.htmlFor = `${volume}-checkbox`;
      label.textContent = `Volume ${volume.replace("volume", "")}`;

      checkboxItem.appendChild(checkbox);
      checkboxItem.appendChild(label);
      volumesCheckboxes.appendChild(checkboxItem);
    });
  };

  // Handle volume checkbox changes
  const handleVolumeSelection = () => {
    const checkboxes = document.querySelectorAll(
      '#volumes-checkboxes input[type="checkbox"]'
    );
    selectedVolumes = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    updateTrackDisplay();
  };

  // Update track display based on selected volumes
  const updateTrackDisplay = () => {
    const tracksPanel = document.getElementById("tracks-panel");
    const tracksContainer = document.getElementById("tracks-container");

    if (selectedVolumes.length === 0) {
      toggleElementVisibility(tracksPanel, false);
      return;
    }

    // Show tracks panel
    toggleElementVisibility(tracksPanel, true);

    // Generate track items
    tracksContainer.innerHTML = "";

    const tracks = getSelectedTracks();
    tracks.forEach((track) => {
      const trackItem = document.createElement("div");
      trackItem.className = "track-item";
      trackItem.textContent = track;
      tracksContainer.appendChild(trackItem);
    });

    // Create visualization with selected data
    createVisualization();
  };

  // Create visualization based on selected tracks
  const createVisualization = () => {
    const svg = d3.select("svg");
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    // Clear existing visualization
    svg.selectAll("*").remove();

    const tracks = getSelectedTracks();
    if (tracks.length === 0) return;

    // Create visualization elements
    const elementSpacing = width / (tracks.length + 1);

    svg
      .selectAll("circle")
      .data(tracks)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => elementSpacing * (i + 1))
      .attr("cy", height / 2)
      .attr("r", 20)
      .style("fill", "blue")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .delay((d, i) => i * 30)
      .style("opacity", 1);

    svg
      .selectAll("text")
      .data(tracks)
      .enter()
      .append("text")
      .attr("x", (d, i) => elementSpacing * (i + 1))
      .attr("y", height / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("opacity", 0)
      .text((d) => d.slice(0, 8) + (d.length > 8 ? "..." : ""))
      .append("title")
      .text((d) => d) // Full name on hover
      .transition()
      .duration(500)
      .delay((d, i) => i * 30 + 200)
      .style("opacity", 1);
  };

  // Create analysis view
  const createAnalysisView = () => {
    const analysisView = document.getElementById("analysis-view");
    analysisView.classList.remove("hidden");
    setTimeout(() => {
      analysisView.classList.add("show");
    }, 10);

    // Prepare all track data with volume information
    const masterpieces = [];
    const milestones = [];

    // Process masterpieces data with volume information
    Object.entries(data.masterpieces).forEach(([volume, tracks]) => {
      const volumeNumber = parseInt(volume.replace("volume", ""));
      tracks.forEach((track) => {
        masterpieces.push({
          volumeNumber: volumeNumber,
          volumeKey: volume,
          volumeLabel: `Volume ${volumeNumber}`,
          track: track,
        });
      });
    });

    // Process milestones data with volume information
    Object.entries(data.milestones).forEach(([volume, tracks]) => {
      const volumeNumber = parseInt(volume.replace("volume", ""));
      tracks.forEach((track) => {
        milestones.push({
          volumeNumber: volumeNumber,
          volumeKey: volume,
          volumeLabel: `Volume ${volumeNumber}`,
          track: track,
        });
      });
    });

    // Create table rows - one row per track from either collection
    const tableBody = document.getElementById("analysis-table-body");
    tableBody.innerHTML = "";

    // Get all unique volume numbers and sort them numerically
    const allVolumeNumbers = new Set([
      ...masterpieces.map((item) => item.volumeNumber),
      ...milestones.map((item) => item.volumeNumber),
    ]);

    const sortedVolumeNumbers = Array.from(allVolumeNumbers).sort(
      (a, b) => a - b
    );

    // For each volume, display all tracks
    sortedVolumeNumbers.forEach((volumeNumber) => {
      const volumeMasterpieces = masterpieces.filter(
        (item) => item.volumeNumber === volumeNumber
      );
      const volumeMilestones = milestones.filter(
        (item) => item.volumeNumber === volumeNumber
      );

      // Add a volume header row
      const volumeLabel = `Volume ${volumeNumber}`;
      const headerRow = document.createElement("tr");
      headerRow.className = "volume-header";

      const volumeHeaderCell = document.createElement("td");
      volumeHeaderCell.colSpan = 3;
      volumeHeaderCell.className = "volume-header-cell";
      volumeHeaderCell.textContent = volumeLabel;
      headerRow.appendChild(volumeHeaderCell);
      tableBody.appendChild(headerRow);

      // Find max rows needed for this volume
      const maxRows = Math.max(
        volumeMasterpieces.length,
        volumeMilestones.length
      );

      // Add each track row
      for (let i = 0; i < maxRows; i++) {
        const row = document.createElement("tr");

        // Volume cell - leave empty since we have a header
        const volumeCell = document.createElement("td");
        volumeCell.className = "volume-cell";
        // Empty volume cell since we already have the volume header
        row.appendChild(volumeCell);

        // Masterpiece cell
        const masterCell = document.createElement("td");
        masterCell.className = "masterpiece-cell";
        if (i < volumeMasterpieces.length) {
          masterCell.textContent = volumeMasterpieces[i].track;
          masterCell.dataset.track = volumeMasterpieces[i].track;
          masterCell.dataset.volume = volumeMasterpieces[i].volumeLabel;
          masterCell.dataset.volumeNumber = volumeMasterpieces[i].volumeNumber;
        }
        row.appendChild(masterCell);

        // Milestone cell
        const mileCell = document.createElement("td");
        mileCell.className = "milestone-cell";
        if (i < volumeMilestones.length) {
          mileCell.textContent = volumeMilestones[i].track;
          mileCell.dataset.track = volumeMilestones[i].track;
          mileCell.dataset.volume = volumeMilestones[i].volumeLabel;
          mileCell.dataset.volumeNumber = volumeMilestones[i].volumeNumber;
        }
        row.appendChild(mileCell);

        tableBody.appendChild(row);
      }
    });

    // Initialize filters
    updateFilters();
  };

  // Generate a consistent color for a string
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  // Update analysis filters
  const updateFilters = () => {
    const showAll = document.getElementById("show-all").checked;
    const onlyMasterpieces =
      document.getElementById("only-masterpieces").checked;
    const onlyMilestones = document.getElementById("only-milestones").checked;
    const showDuplicates = document.getElementById("show-duplicates").checked;
    const hideDuplicates = document.getElementById("hide-duplicates").checked;

    // Get collections for comparison
    const allMasterpieces = [].concat(
      ...Object.values(data.masterpieces).map((v) => v)
    );
    const allMilestones = [].concat(
      ...Object.values(data.milestones).map((v) => v)
    );

    const uniqueMasterpieces = new Set(allMasterpieces);
    const uniqueMilestones = new Set(allMilestones);

    // Get all table cells
    const masterCells = document.querySelectorAll(".masterpiece-cell");
    const mileCells = document.querySelectorAll(".milestone-cell");

    // Reset all cells first
    const allCells = [...masterCells, ...mileCells];
    allCells.forEach((cell) => {
      cell.style.display = "";
      cell.style.opacity = "1";
      cell.style.backgroundColor = "";
      cell.classList.remove(
        "duplicate-track",
        "blurred-duplicate",
        "primary-duplicate"
      );
      cell.style.filter = "";
    });

    // Apply column filters
    if (!showAll) {
      if (onlyMasterpieces) {
        mileCells.forEach((cell) => {
          cell.style.display = "none";
        });
      }

      if (onlyMilestones) {
        masterCells.forEach((cell) => {
          cell.style.display = "none";
        });
      }
    }

    // Process duplicate highlighting
    if (showDuplicates) {
      // Find all unique track names across both collections
      const allTracksSet = new Set([...allMasterpieces, ...allMilestones]);
      const trackCounts = new Map();

      // Count occurrences of each track
      allCells.forEach((cell) => {
        const trackName = cell.dataset.track;
        if (!trackName) return;

        if (!trackCounts.has(trackName)) {
          trackCounts.set(trackName, 0);
        }
        trackCounts.set(trackName, trackCounts.get(trackName) + 1);
      });

      // Color cells based on track names
      allCells.forEach((cell) => {
        const trackName = cell.dataset.track;
        if (!trackName) return;

        // Only color duplicates (tracks that appear more than once)
        if (trackCounts.get(trackName) > 1) {
          cell.classList.add("duplicate-track");
          cell.style.backgroundColor = `${stringToColor(trackName)}33`; // 33 is hex for 20% opacity
          cell.style.borderLeft = `4px solid ${stringToColor(trackName)}`;
        }
      });
    }

    // Process hiding duplicates
    if (hideDuplicates) {
      const processedTracks = new Set();

      allCells.forEach((cell) => {
        const trackName = cell.dataset.track;
        if (!trackName) return;

        if (processedTracks.has(trackName)) {
          // This is a duplicate, blur it
          cell.classList.add("blurred-duplicate");
        } else {
          // This is the first occurrence, highlight it
          processedTracks.add(trackName);
          cell.classList.add("primary-duplicate");
          cell.style.backgroundColor = `${stringToColor(trackName)}33`;
          cell.style.borderLeft = `4px solid ${stringToColor(trackName)}`;
        }
      });
    }

    // Update stats display
    updateStatsDisplay();
  };

  // Update stats display
  const updateStatsDisplay = () => {
    const showAll = document.getElementById("show-all").checked;
    const onlyMasterpieces =
      document.getElementById("only-masterpieces").checked;
    const onlyMilestones = document.getElementById("only-milestones").checked;
    const uniqueTracks = document.getElementById("unique-tracks").checked;

    const allMasterpieces = [].concat(
      ...Object.values(data.masterpieces).map((v) => v)
    );
    const allMilestones = [].concat(
      ...Object.values(data.milestones).map((v) => v)
    );

    const uniqueMasterpieces = new Set(allMasterpieces);
    const uniqueMilestones = new Set(allMilestones);

    const overlap = [...uniqueMasterpieces].filter((track) =>
      uniqueMilestones.has(track)
    );

    const statsDisplay = document.getElementById("statsDisplay");
    statsDisplay.innerHTML = "";

    if (showAll) {
      statsDisplay.innerHTML = `
        <h3>Collection Stats:</h3>
        <p>Masterpieces: ${uniqueMasterpieces.size} unique tracks out of ${
        allMasterpieces.length
      } total</p>
        <p>Milestones: ${uniqueMilestones.size} unique tracks out of ${
        allMilestones.length
      } total</p>
        <p>${overlap.length} tracks appear in both collections</p>
        <p>Overlap ratio: ${Math.round(
          (overlap.length /
            (uniqueMasterpieces.size +
              uniqueMilestones.size -
              overlap.length)) *
            100
        )}%</p>
      `;
    } else if (onlyMasterpieces) {
      statsDisplay.innerHTML = `
        <h3>Masterpieces Stats:</h3>
        <p>${uniqueMasterpieces.size} unique tracks across ${
        Object.keys(data.masterpieces).length
      } volumes</p>
        <p>Average tracks per volume: ${Math.round(
          allMasterpieces.length / Object.keys(data.masterpieces).length
        )}</p>
      `;
    } else if (onlyMilestones) {
      statsDisplay.innerHTML = `
        <h3>Milestones Stats:</h3>
        <p>${uniqueMilestones.size} unique tracks across ${
        Object.keys(data.milestones).length
      } volumes</p>
        <p>Average tracks per volume: ${Math.round(
          allMilestones.length / Object.keys(data.milestones).length
        )}</p>
      `;
    } else if (uniqueTracks) {
      const uniqueToMasterpieces = [...uniqueMasterpieces].filter(
        (track) => !uniqueMilestones.has(track)
      ).length;
      const uniqueToMilestones = [...uniqueMilestones].filter(
        (track) => !uniqueMasterpieces.has(track)
      ).length;

      statsDisplay.innerHTML = `
        <h3>Unique Tracks Stats:</h3>
        <p>${uniqueToMasterpieces} tracks appear only in Masterpieces</p>
        <p>${uniqueToMilestones} tracks appear only in Milestones</p>
        <p>${overlap.length} tracks appear in both collections</p>
      `;
    }
  };

  // Initialize event listeners
  const initializeEventListeners = () => {
    // Collection select change
    document
      .getElementById("collection-select")
      .addEventListener("change", handleCollectionChange);

    // Analyze button
    document
      .getElementById("analyze-btn")
      .addEventListener("click", createAnalysisView);

    // Filter checkboxes
    document.getElementById("show-all").addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("only-masterpieces").checked = false;
        document.getElementById("only-milestones").checked = false;
      }
      updateFilters();
    });

    document
      .getElementById("only-masterpieces")
      .addEventListener("change", function () {
        if (this.checked) {
          document.getElementById("show-all").checked = false;
          document.getElementById("only-milestones").checked = false;
        }
        updateFilters();
      });

    document
      .getElementById("only-milestones")
      .addEventListener("change", function () {
        if (this.checked) {
          document.getElementById("show-all").checked = false;
          document.getElementById("only-masterpieces").checked = false;
        }
        updateFilters();
      });

    document
      .getElementById("unique-tracks")
      .addEventListener("change", updateFilters);

    // New filter checkboxes
    document
      .getElementById("show-duplicates")
      .addEventListener("change", function () {
        if (this.checked) {
          document.getElementById("hide-duplicates").checked = false;
        }
        updateFilters();
      });

    document
      .getElementById("hide-duplicates")
      .addEventListener("change", function () {
        if (this.checked) {
          document.getElementById("show-duplicates").checked = false;
        }
        updateFilters();
      });
  };

  // Initialize on DOM load
  console.log("DOM loaded");
  initializeEventListeners();
});
