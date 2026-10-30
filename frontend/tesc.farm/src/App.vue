<script setup lang="ts"></script>

<template>
  <header
    class="bg-gradient-to-b from-leaf-900 to-leaf-800 text-stone-100 border-b-4 border-terracotta-500 shadow-md"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 pb-2 border-b border-leaf-700/60"
      >
        <div class="flex items-center gap-4 text-center md:text-left">
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-leaf-700/50 border border-leaf-600 flex items-center justify-center text-terracotta-500 shrink-0 shadow-inner"
          >
            <i class="fa-solid fa-seedling text-3xl sm:text-4xl"></i>
          </div>
          <div>
            <span
              class="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-1"
            >
              The Evergreen State College
            </span>
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white"
            >
              Syrphid Project
            </h1>
            <p
              class="text-base sm:text-lg text-emerald-100 font-serif italic mt-1"
            >
              Farm Management, Data &amp; Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        class="bg-paperCard rounded-2xl p-6 sm:p-8 shadow-sm border border-earth-200/80 relative flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span
              class="w-8 h-8 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center font-bold text-sm"
            >
              1
            </span>
            <h2 class="text-xl sm:text-2xl font-serif font-bold text-earth-900">
              The Working Organic Farm
            </h2>
          </div>

          <p
            class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-sans"
          >
            Connected to Evergreen’s Olympia campus by two forest trails, the
            Organic Farm is a 3-acre working USDA-certified organic farm and a
            living laboratory for students. It currently produces fruits,
            vegetables, eggs, poultry, herbs, cut flowers, and plant starts.
          </p>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            The sunny 5-acre area features the historic Farmhouse (built by
            students in the 1970s), fields, orchards, a food forest,
            greenhouses, wash stations, and composting facilities.
          </p>
        </div>
      </div>

      <div
        class="bg-paperCard rounded-2xl p-6 sm:p-8 shadow-sm border border-earth-200/80 relative flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span
              class="w-8 h-8 rounded-full bg-leaf-100 text-earth-800 flex items-center justify-center font-bold text-sm"
            >
              2
            </span>
            <h2 class="text-xl sm:text-2xl font-serif font-bold text-earth-900">
              Calculating Profitability
            </h2>
          </div>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            Students have been studying
            <em>The Organic Farmer's Business Handbook</em> by Richard Wiswall
            to learn how to make crop production more efficient, manage labor
            time, and calculate crop enterprise profitability.
          </p>

          <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            While farming offers fundamental satisfaction from working outdoors,
            it involves complex decision-making. By replacing paper logs with
            automated data collection, we empower small farmers to prevent
            frustrating losses and make data-driven decisions.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
          Hardware, Sensing &amp; Open Source Stack
        </h2>
        <p class="text-sm text-slate-600">
          Combining low-power microcontrollers, mesh networking, and
          containerized software to create an accessible system for small farms.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-barcode"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Barcodes From Seed to Sale
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Students scan barcodes at harvest. Produce is linked to harvest time
            and area, allowing every batch to be tracked individually through
            washing, packing, and market sales.
          </p>
        </div>

        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-microchip"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Networking Scales
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Digital scales connect directly into Raspberry Pi servers through
            GPIO pins. Data synchronizes over wireless bridges to a central
            MariaDB database.
          </p>
        </div>

        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-network-wired"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Soil Ecology Sensor Mesh
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Microcontrollers powered by tiny solar panels form a wireless mesh
            across farmland, logging soil moisture, temperature, and weather
            station data.
          </p>
        </div>

        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-globe"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Open Source Software
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            All of the code is freely available and under active maintenance and
            development by the community. It will continue to improve and become
            more stable as the project matures.
          </p>
        </div>

        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-leaf-100 text-terracotta-600 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-sun"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Solar Powered
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            High-efficiency hardware keeps total power draw under 10W under
            load. A single 100W solar panel and rechargeable battery keep the
            server online perpetually.
          </p>
        </div>

        <div
          class="bg-paperCard p-6 rounded-2xl shadow-sm border border-earth-200/80 hover:border-leaf-600/50 transition"
        >
          <div
            class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 text-lg"
          >
            <i class="fa-solid fa-code-branch"></i>
          </div>
          <h3 class="font-serif font-bold text-lg text-slate-900 mb-2">
            Containerized Stack
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            Built on Debian Linux, MariaDB, Nginx, and a Go API. Software is
            containerized for small farmers to deploy with minimal effort and
            zero license costs.
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-leaf-800 text-stone-100 rounded-2xl p-8 sm:p-10 shadow-md relative overflow-hidden"
    >
      <div class="max-w-3xl space-y-4 relative z-10">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white">
          Sharing the Bounty
        </h2>
        <p
          class="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-serif"
        >
          Eating food grown by local farmers is great for sustainability,
          health, and economic stability. When farmers thrive, we all reap the
          benefits. As computing power has advanced, gains have been
          concentrated in large industrial farms. This project levels the
          playing field—producing a robust package of tools that allows small
          farms to take advantage of the information age.
        </p>
      </div>
    </section>
  </main>

  <footer
    class="bg-earth-900 text-earth-200 text-xs py-8 border-t border-earth-800"
  >
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
    >
      <div>
        <p class="text-earth-200/80 mt-0.5">
          Project of The Evergreen State College, Olympia Washington
        </p>
      </div>
      <div class="text-earth-200/80">
        <p>Released under the Creative Commons Zero License</p>
      </div>
    </div>
  </footer>
</template>
