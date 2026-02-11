const state = {
  coins: 0,
  perClick: 1,
  perSecond: 0,
  settings: {
    language: "en",
    uiStyle: "classic",
    inventoryTab: "all",
    shortNumbers: false,
    skin: "classic",
    music: "none",
    reduceMotion: false,
    confirmReset: true,
    buyMode: "1",
    shopSort: "default",
  },
  stats: {
    totalEarned: 0,
    timePlayedMs: 0,
    lastTick: Date.now(),
    totalClicks: 0,
    upgradesBought: 0,
    casesOpened: 0,
    bestStreak: 0,
  },
  caseOpening: false,
  streak: {
    count: 0,
    lastClickTs: 0,
  },
  golden: {
    active: false,
    timeoutId: null,
  },
  gameplay: {
    noCritClicks: 0,
    momentum: 0,
    lastSessionAt: Date.now(),
    surge: {
      activeUntil: 0,
      nextAt: Date.now() + 60000,
      wasActive: false,
    },
  },
  progress: {
    prestigeLevel: 0,
  },
  inventory: [],
  skins: [
    {
      id: "classic",
      nameKey: "skin_classic_name",
      descKey: "skin_classic_desc",
      cost: 0,
      owned: true,
      theme: {
        bg: "#0f0e14",
        panel: "#1b1a25",
        panel2: "#232233",
        accent: "#ffb703",
        accent2: "#fb8500",
        text: "#f7f7fb",
        muted: "#b8b6c8",
        good: "#00d07d",
        bad: "#ff5c5c",
      },
    },
    {
      id: "mint",
      nameKey: "skin_mint_name",
      descKey: "skin_mint_desc",
      cost: 1500,
      owned: false,
      theme: {
        bg: "#0c1312",
        panel: "#13211f",
        panel2: "#182a27",
        accent: "#2de2a6",
        accent2: "#1bbf8b",
        text: "#eafbf6",
        muted: "#a6c7bd",
        good: "#2de2a6",
        bad: "#ff6b6b",
      },
    },
    {
      id: "sunset",
      nameKey: "skin_sunset_name",
      descKey: "skin_sunset_desc",
      cost: 3500,
      owned: false,
      theme: {
        bg: "#140c12",
        panel: "#24101c",
        panel2: "#2c1422",
        accent: "#ff6b6b",
        accent2: "#ffd166",
        text: "#fff3f2",
        muted: "#d8b7c4",
        good: "#ffd166",
        bad: "#ff4d6d",
      },
    },
    {
      id: "neon",
      nameKey: "skin_neon_name",
      descKey: "skin_neon_desc",
      cost: 8000,
      owned: false,
      theme: {
        bg: "#0a0a16",
        panel: "#111126",
        panel2: "#15152f",
        accent: "#7df9ff",
        accent2: "#ff2a6d",
        text: "#f1f1ff",
        muted: "#b5b5e0",
        good: "#7df9ff",
        bad: "#ff2a6d",
      },
    },
    {
      id: "aurora",
      nameKey: "skin_aurora_name",
      descKey: "skin_aurora_desc",
      cost: 12000,
      owned: false,
      theme: {
        bg: "#0a0f14",
        panel: "#111b24",
        panel2: "#15212c",
        accent: "#5efc8d",
        accent2: "#62c6ff",
        text: "#e9f7ff",
        muted: "#9fb4c8",
        good: "#5efc8d",
        bad: "#ff7a7a",
      },
    },
    {
      id: "ember",
      nameKey: "skin_ember_name",
      descKey: "skin_ember_desc",
      cost: 20000,
      owned: false,
      theme: {
        bg: "#140b0a",
        panel: "#24110d",
        panel2: "#2b150f",
        accent: "#ff9f1c",
        accent2: "#ff5714",
        text: "#fff2e6",
        muted: "#d0b5a7",
        good: "#ff9f1c",
        bad: "#ff4d4d",
      },
    },
    {
      id: "ice",
      nameKey: "skin_ice_name",
      descKey: "skin_ice_desc",
      cost: 28000,
      owned: false,
      theme: {
        bg: "#0b1216",
        panel: "#111d24",
        panel2: "#16232b",
        accent: "#8fd3ff",
        accent2: "#bde0fe",
        text: "#eef7ff",
        muted: "#a9bac7",
        good: "#8fd3ff",
        bad: "#ff6b6b",
      },
    },
    {
      id: "orchid",
      nameKey: "skin_orchid_name",
      descKey: "skin_orchid_desc",
      cost: 42000,
      owned: false,
      theme: {
        bg: "#140d16",
        panel: "#221629",
        panel2: "#2a1b34",
        accent: "#ff7ad9",
        accent2: "#b089ff",
        text: "#fff3fb",
        muted: "#cbb1d8",
        good: "#7df9ff",
        bad: "#ff5c8a",
      },
    },
    {
      id: "sand",
      nameKey: "skin_sand_name",
      descKey: "skin_sand_desc",
      cost: 60000,
      owned: false,
      theme: {
        bg: "#16120c",
        panel: "#241c12",
        panel2: "#2c2316",
        accent: "#f6c453",
        accent2: "#e76f51",
        text: "#fff6e3",
        muted: "#d1c0a3",
        good: "#f6c453",
        bad: "#ff6b6b",
      },
    },
    {
      id: "noir",
      nameKey: "skin_noir_name",
      descKey: "skin_noir_desc",
      cost: 90000,
      owned: false,
      theme: {
        bg: "#0c0c0c",
        panel: "#161616",
        panel2: "#1d1d1d",
        accent: "#f5f5f5",
        accent2: "#8b8b8b",
        text: "#f0f0f0",
        muted: "#a0a0a0",
        good: "#b5ff7d",
        bad: "#ff6b6b",
      },
    },
    {
      id: "nebula",
      nameKey: "skin_nebula_name",
      descKey: "skin_nebula_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0b0b18",
        panel: "#151529",
        panel2: "#1b1b35",
        accent: "#7c5cff",
        accent2: "#00d1ff",
        text: "#f2f1ff",
        muted: "#b6b4d6",
        good: "#00d1ff",
        bad: "#ff6b6b",
      },
    },
    {
      id: "royal",
      nameKey: "skin_royal_name",
      descKey: "skin_royal_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#120b18",
        panel: "#1e1229",
        panel2: "#241532",
        accent: "#ffd166",
        accent2: "#9b5de5",
        text: "#fff7e6",
        muted: "#d1c0a3",
        good: "#ffd166",
        bad: "#ff6b6b",
      },
    },
    {
      id: "toxic",
      nameKey: "skin_toxic_name",
      descKey: "skin_toxic_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0c130c",
        panel: "#142114",
        panel2: "#182818",
        accent: "#a7ff4f",
        accent2: "#00ffa2",
        text: "#f3ffe6",
        muted: "#b6c8a4",
        good: "#a7ff4f",
        bad: "#ff6b6b",
      },
    },
    {
      id: "obsidian",
      nameKey: "skin_obsidian_name",
      descKey: "skin_obsidian_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0a0a0a",
        panel: "#151515",
        panel2: "#1b1b1b",
        accent: "#ff7a00",
        accent2: "#ff3d3d",
        text: "#f5f5f5",
        muted: "#a6a6a6",
        good: "#ff7a00",
        bad: "#ff3d3d",
      },
    },
    {
      id: "spectrum",
      nameKey: "skin_spectrum_name",
      descKey: "skin_spectrum_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0b0f12",
        panel: "#141a1f",
        panel2: "#1a2229",
        accent: "#ff9bd5",
        accent2: "#6ee7ff",
        text: "#f5fbff",
        muted: "#b8c5d1",
        good: "#6ee7ff",
        bad: "#ff6b6b",
      },
    },
    {
      id: "arcade",
      nameKey: "skin_arcade_name",
      descKey: "skin_arcade_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0b0a14",
        panel: "#14112a",
        panel2: "#1a1733",
        accent: "#00f5d4",
        accent2: "#f15bb5",
        text: "#f8f3ff",
        muted: "#bfb3d9",
        good: "#00f5d4",
        bad: "#ff4d6d",
      },
    },
    {
      id: "goldrush",
      nameKey: "skin_goldrush_name",
      descKey: "skin_goldrush_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#120f08",
        panel: "#201808",
        panel2: "#2a1f0b",
        accent: "#f9c74f",
        accent2: "#f9844a",
        text: "#fff2d8",
        muted: "#d4c3a1",
        good: "#f9c74f",
        bad: "#ff6b6b",
      },
    },
    {
      id: "holo",
      nameKey: "skin_holo_name",
      descKey: "skin_holo_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0b0e13",
        panel: "#131b24",
        panel2: "#18212c",
        accent: "#9bf6ff",
        accent2: "#bdb2ff",
        text: "#eef7ff",
        muted: "#b1c0cf",
        good: "#9bf6ff",
        bad: "#ff6b6b",
      },
    },
    {
      id: "inferno",
      nameKey: "skin_inferno_name",
      descKey: "skin_inferno_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#120808",
        panel: "#1f0f0f",
        panel2: "#271313",
        accent: "#ff6d00",
        accent2: "#ff0054",
        text: "#ffe8e8",
        muted: "#d2a3a3",
        good: "#ff6d00",
        bad: "#ff0054",
      },
    },
    {
      id: "aether",
      nameKey: "skin_aether_name",
      descKey: "skin_aether_desc",
      cost: 0,
      owned: false,
      caseOnly: true,
      theme: {
        bg: "#0b1015",
        panel: "#141e27",
        panel2: "#1b2631",
        accent: "#80ffdb",
        accent2: "#5e60ce",
        text: "#f0f7ff",
        muted: "#aebacc",
        good: "#80ffdb",
        bad: "#ff6b6b",
      },
    },
  ],
  cases: [
    {
      id: "money_case",
      nameKey: "case_money_name",
      descKey: "case_money_desc",
      cost: 200,
      coins: [100, 200, 500, 1000, 2000, 400, 800, 5000],
    },
    {
      id: "exclusive_case",
      nameKey: "case_exclusive_name",
      descKey: "case_exclusive_desc",
      cost: 500,
      skins: ["nebula", "royal", "toxic", "obsidian", "spectrum", "arcade", "goldrush", "holo", "inferno", "aether"],
    },
  ],
  musicTracks: [
    {
      id: "digital_dreams",
      nameKey: "music_digital_name",
      descKey: "music_digital_desc",
      cost: 1000,
      path: "Sounds/digital-dreams_89467.mp3",
      owned: false,
    },
    {
      id: "echoes_of_joy",
      nameKey: "music_echoes_name",
      descKey: "music_echoes_desc",
      cost: 850,
      path: "Sounds/echoes-of-joy_89484.mp3",
      owned: false,
    },
    {
      id: "euphoric_ascent",
      nameKey: "music_euphoric_name",
      descKey: "music_euphoric_desc",
      cost: 1240,
      path: "Sounds/euphoric-ascent_89538.mp3",
      owned: false,
    },
  ],
  upgrades: [
    {
      id: "tapsuit",
      nameKey: "up_tapsuit_name",
      descKey: "up_tapsuit_desc",
      category: "upgrade",
      baseCost: 12,
      growth: 1.16,
      owned: 0,
      type: "click",
      value: 1,
    },
    {
      id: "gyro",
      nameKey: "up_gyro_name",
      descKey: "up_gyro_desc",
      category: "upgrade",
      baseCost: 65,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 3,
    },
    {
      id: "pulsecore",
      nameKey: "up_pulsecore_name",
      descKey: "up_pulsecore_desc",
      category: "upgrade",
      baseCost: 320,
      growth: 1.2,
      owned: 0,
      type: "click",
      value: 8,
    },
    {
      id: "exosleeve",
      nameKey: "up_exosleeve_name",
      descKey: "up_exosleeve_desc",
      category: "upgrade",
      baseCost: 1400,
      growth: 1.22,
      owned: 0,
      type: "click",
      value: 18,
    },
    {
      id: "relay",
      nameKey: "up_relay_name",
      descKey: "up_relay_desc",
      category: "upgrade",
      baseCost: 7200,
      growth: 1.24,
      owned: 0,
      type: "click",
      value: 45,
    },
    {
      id: "neurogrip",
      nameKey: "up_neurogrip_name",
      descKey: "up_neurogrip_desc",
      category: "upgrade",
      baseCost: 32000,
      growth: 1.26,
      owned: 0,
      type: "click",
      value: 110,
    },
    {
      id: "hyperglove",
      nameKey: "up_hyperglove_name",
      descKey: "up_hyperglove_desc",
      category: "upgrade",
      baseCost: 150000,
      growth: 1.28,
      owned: 0,
      type: "click",
      value: 260,
    },
    {
      id: "chrono",
      nameKey: "up_chrono_name",
      descKey: "up_chrono_desc",
      category: "upgrade",
      baseCost: 780000,
      growth: 1.3,
      owned: 0,
      type: "click",
      value: 620,
    },
    {
      id: "microdrone",
      nameKey: "up_microdrone_name",
      descKey: "up_microdrone_desc",
      category: "auto",
      baseCost: 28,
      growth: 1.17,
      owned: 0,
      type: "auto",
      value: 1,
    },
    {
      id: "pressline",
      nameKey: "up_pressline_name",
      descKey: "up_pressline_desc",
      category: "auto",
      baseCost: 140,
      growth: 1.19,
      owned: 0,
      type: "auto",
      value: 5,
    },
    {
      id: "autolab",
      nameKey: "up_autolab_name",
      descKey: "up_autolab_desc",
      category: "auto",
      baseCost: 650,
      growth: 1.21,
      owned: 0,
      type: "auto",
      value: 16,
    },
    {
      id: "serverfarm",
      nameKey: "up_serverfarm_name",
      descKey: "up_serverfarm_desc",
      category: "auto",
      baseCost: 3600,
      growth: 1.23,
      owned: 0,
      type: "auto",
      value: 45,
    },
    {
      id: "orbitdock",
      nameKey: "up_orbitdock_name",
      descKey: "up_orbitdock_desc",
      category: "auto",
      baseCost: 21000,
      growth: 1.25,
      owned: 0,
      type: "auto",
      value: 130,
    },
    {
      id: "nanofactory",
      nameKey: "up_nanofactory_name",
      descKey: "up_nanofactory_desc",
      category: "auto",
      baseCost: 120000,
      growth: 1.27,
      owned: 0,
      type: "auto",
      value: 380,
    },
    {
      id: "aicloud",
      nameKey: "up_aicloud_name",
      descKey: "up_aicloud_desc",
      category: "auto",
      baseCost: 640000,
      growth: 1.29,
      owned: 0,
      type: "auto",
      value: 980,
    },
    {
      id: "stellarforge",
      nameKey: "up_stellarforge_name",
      descKey: "up_stellarforge_desc",
      category: "auto",
      baseCost: 3200000,
      growth: 1.31,
      owned: 0,
      type: "auto",
      value: 2600,
    },
    {
      id: "focus",
      nameKey: "up_focus_name",
      descKey: "up_focus_desc",
      category: "multiplier",
      baseCost: 280,
      growth: 1.22,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.1,
    },
    {
      id: "overclock",
      nameKey: "up_overclock_name",
      descKey: "up_overclock_desc",
      category: "multiplier",
      baseCost: 900,
      growth: 1.24,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.1,
    },
    {
      id: "capacitor",
      nameKey: "up_capacitor_name",
      descKey: "up_capacitor_desc",
      category: "multiplier",
      baseCost: 5200,
      growth: 1.27,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.2,
    },
    {
      id: "booster",
      nameKey: "up_booster_name",
      descKey: "up_booster_desc",
      category: "multiplier",
      baseCost: 13000,
      growth: 1.29,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.2,
    },
    {
      id: "resonator",
      nameKey: "up_resonator_name",
      descKey: "up_resonator_desc",
      category: "multiplier",
      baseCost: 64000,
      growth: 1.31,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.3,
    },
    {
      id: "grid",
      nameKey: "up_grid_name",
      descKey: "up_grid_desc",
      category: "multiplier",
      baseCost: 180000,
      growth: 1.33,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.3,
    },
    {
      id: "tapmod1",
      nameKey: "up_tapmod1_name",
      descKey: "up_tapmod1_desc",
      category: "upgrade",
      baseCost: 200,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 3,
    },
    {
      id: "tapmod2",
      nameKey: "up_tapmod2_name",
      descKey: "up_tapmod2_desc",
      category: "upgrade",
      baseCost: 320,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 6,
    },
    {
      id: "tapmod3",
      nameKey: "up_tapmod3_name",
      descKey: "up_tapmod3_desc",
      category: "upgrade",
      baseCost: 512,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 9,
    },
    {
      id: "tapmod4",
      nameKey: "up_tapmod4_name",
      descKey: "up_tapmod4_desc",
      category: "upgrade",
      baseCost: 819,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 12,
    },
    {
      id: "tapmod5",
      nameKey: "up_tapmod5_name",
      descKey: "up_tapmod5_desc",
      category: "upgrade",
      baseCost: 1311,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 15,
    },
    {
      id: "tapmod6",
      nameKey: "up_tapmod6_name",
      descKey: "up_tapmod6_desc",
      category: "upgrade",
      baseCost: 2097,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 18,
    },
    {
      id: "tapmod7",
      nameKey: "up_tapmod7_name",
      descKey: "up_tapmod7_desc",
      category: "upgrade",
      baseCost: 3355,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 21,
    },
    {
      id: "tapmod8",
      nameKey: "up_tapmod8_name",
      descKey: "up_tapmod8_desc",
      category: "upgrade",
      baseCost: 5369,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 24,
    },
    {
      id: "tapmod9",
      nameKey: "up_tapmod9_name",
      descKey: "up_tapmod9_desc",
      category: "upgrade",
      baseCost: 8590,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 27,
    },
    {
      id: "tapmod10",
      nameKey: "up_tapmod10_name",
      descKey: "up_tapmod10_desc",
      category: "upgrade",
      baseCost: 13744,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 30,
    },
    {
      id: "tapmod11",
      nameKey: "up_tapmod11_name",
      descKey: "up_tapmod11_desc",
      category: "upgrade",
      baseCost: 21990,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 33,
    },
    {
      id: "tapmod12",
      nameKey: "up_tapmod12_name",
      descKey: "up_tapmod12_desc",
      category: "upgrade",
      baseCost: 35184,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 36,
    },
    {
      id: "tapmod13",
      nameKey: "up_tapmod13_name",
      descKey: "up_tapmod13_desc",
      category: "upgrade",
      baseCost: 56295,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 39,
    },
    {
      id: "tapmod14",
      nameKey: "up_tapmod14_name",
      descKey: "up_tapmod14_desc",
      category: "upgrade",
      baseCost: 90072,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 42,
    },
    {
      id: "tapmod15",
      nameKey: "up_tapmod15_name",
      descKey: "up_tapmod15_desc",
      category: "upgrade",
      baseCost: 144115,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 45,
    },
    {
      id: "tapmod16",
      nameKey: "up_tapmod16_name",
      descKey: "up_tapmod16_desc",
      category: "upgrade",
      baseCost: 230584,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 48,
    },
    {
      id: "tapmod17",
      nameKey: "up_tapmod17_name",
      descKey: "up_tapmod17_desc",
      category: "upgrade",
      baseCost: 368935,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 51,
    },
    {
      id: "tapmod18",
      nameKey: "up_tapmod18_name",
      descKey: "up_tapmod18_desc",
      category: "upgrade",
      baseCost: 590296,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 54,
    },
    {
      id: "tapmod19",
      nameKey: "up_tapmod19_name",
      descKey: "up_tapmod19_desc",
      category: "upgrade",
      baseCost: 944473,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 57,
    },
    {
      id: "tapmod20",
      nameKey: "up_tapmod20_name",
      descKey: "up_tapmod20_desc",
      category: "upgrade",
      baseCost: 1511157,
      growth: 1.18,
      owned: 0,
      type: "click",
      value: 60,
    },
    {
      id: "automod1",
      nameKey: "up_automod1_name",
      descKey: "up_automod1_desc",
      category: "auto",
      baseCost: 300,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 12,
    },
    {
      id: "automod2",
      nameKey: "up_automod2_name",
      descKey: "up_automod2_desc",
      category: "auto",
      baseCost: 495,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 24,
    },
    {
      id: "automod3",
      nameKey: "up_automod3_name",
      descKey: "up_automod3_desc",
      category: "auto",
      baseCost: 817,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 36,
    },
    {
      id: "automod4",
      nameKey: "up_automod4_name",
      descKey: "up_automod4_desc",
      category: "auto",
      baseCost: 1348,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 48,
    },
    {
      id: "automod5",
      nameKey: "up_automod5_name",
      descKey: "up_automod5_desc",
      category: "auto",
      baseCost: 2224,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 60,
    },
    {
      id: "automod6",
      nameKey: "up_automod6_name",
      descKey: "up_automod6_desc",
      category: "auto",
      baseCost: 3669,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 72,
    },
    {
      id: "automod7",
      nameKey: "up_automod7_name",
      descKey: "up_automod7_desc",
      category: "auto",
      baseCost: 6054,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 84,
    },
    {
      id: "automod8",
      nameKey: "up_automod8_name",
      descKey: "up_automod8_desc",
      category: "auto",
      baseCost: 9989,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 96,
    },
    {
      id: "automod9",
      nameKey: "up_automod9_name",
      descKey: "up_automod9_desc",
      category: "auto",
      baseCost: 16481,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 108,
    },
    {
      id: "automod10",
      nameKey: "up_automod10_name",
      descKey: "up_automod10_desc",
      category: "auto",
      baseCost: 27194,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 120,
    },
    {
      id: "automod11",
      nameKey: "up_automod11_name",
      descKey: "up_automod11_desc",
      category: "auto",
      baseCost: 44870,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 132,
    },
    {
      id: "automod12",
      nameKey: "up_automod12_name",
      descKey: "up_automod12_desc",
      category: "auto",
      baseCost: 74036,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 144,
    },
    {
      id: "automod13",
      nameKey: "up_automod13_name",
      descKey: "up_automod13_desc",
      category: "auto",
      baseCost: 122160,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 156,
    },
    {
      id: "automod14",
      nameKey: "up_automod14_name",
      descKey: "up_automod14_desc",
      category: "auto",
      baseCost: 201564,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 168,
    },
    {
      id: "automod15",
      nameKey: "up_automod15_name",
      descKey: "up_automod15_desc",
      category: "auto",
      baseCost: 332580,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 180,
    },
    {
      id: "automod16",
      nameKey: "up_automod16_name",
      descKey: "up_automod16_desc",
      category: "auto",
      baseCost: 548757,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 192,
    },
    {
      id: "automod17",
      nameKey: "up_automod17_name",
      descKey: "up_automod17_desc",
      category: "auto",
      baseCost: 905450,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 204,
    },
    {
      id: "automod18",
      nameKey: "up_automod18_name",
      descKey: "up_automod18_desc",
      category: "auto",
      baseCost: 1493992,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 216,
    },
    {
      id: "automod19",
      nameKey: "up_automod19_name",
      descKey: "up_automod19_desc",
      category: "auto",
      baseCost: 2465087,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 228,
    },
    {
      id: "automod20",
      nameKey: "up_automod20_name",
      descKey: "up_automod20_desc",
      category: "auto",
      baseCost: 4067394,
      growth: 1.2,
      owned: 0,
      type: "auto",
      value: 240,
    },
    {
      id: "cmult1",
      nameKey: "up_cmult1_name",
      descKey: "up_cmult1_desc",
      category: "multiplier",
      baseCost: 800,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.05,
    },
    {
      id: "cmult2",
      nameKey: "up_cmult2_name",
      descKey: "up_cmult2_desc",
      category: "multiplier",
      baseCost: 1360,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.06,
    },
    {
      id: "cmult3",
      nameKey: "up_cmult3_name",
      descKey: "up_cmult3_desc",
      category: "multiplier",
      baseCost: 2312,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.07,
    },
    {
      id: "cmult4",
      nameKey: "up_cmult4_name",
      descKey: "up_cmult4_desc",
      category: "multiplier",
      baseCost: 3930,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.08,
    },
    {
      id: "cmult5",
      nameKey: "up_cmult5_name",
      descKey: "up_cmult5_desc",
      category: "multiplier",
      baseCost: 6682,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.09,
    },
    {
      id: "cmult6",
      nameKey: "up_cmult6_name",
      descKey: "up_cmult6_desc",
      category: "multiplier",
      baseCost: 11359,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.1,
    },
    {
      id: "cmult7",
      nameKey: "up_cmult7_name",
      descKey: "up_cmult7_desc",
      category: "multiplier",
      baseCost: 19310,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.11,
    },
    {
      id: "cmult8",
      nameKey: "up_cmult8_name",
      descKey: "up_cmult8_desc",
      category: "multiplier",
      baseCost: 32827,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.12,
    },
    {
      id: "cmult9",
      nameKey: "up_cmult9_name",
      descKey: "up_cmult9_desc",
      category: "multiplier",
      baseCost: 55806,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.13,
    },
    {
      id: "cmult10",
      nameKey: "up_cmult10_name",
      descKey: "up_cmult10_desc",
      category: "multiplier",
      baseCost: 94870,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "click",
      multiplier: 1.14,
    },
    {
      id: "amult1",
      nameKey: "up_amult1_name",
      descKey: "up_amult1_desc",
      category: "multiplier",
      baseCost: 900,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.05,
    },
    {
      id: "amult2",
      nameKey: "up_amult2_name",
      descKey: "up_amult2_desc",
      category: "multiplier",
      baseCost: 1530,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.06,
    },
    {
      id: "amult3",
      nameKey: "up_amult3_name",
      descKey: "up_amult3_desc",
      category: "multiplier",
      baseCost: 2601,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.07,
    },
    {
      id: "amult4",
      nameKey: "up_amult4_name",
      descKey: "up_amult4_desc",
      category: "multiplier",
      baseCost: 4422,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.08,
    },
    {
      id: "amult5",
      nameKey: "up_amult5_name",
      descKey: "up_amult5_desc",
      category: "multiplier",
      baseCost: 7517,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.09,
    },
    {
      id: "amult6",
      nameKey: "up_amult6_name",
      descKey: "up_amult6_desc",
      category: "multiplier",
      baseCost: 12779,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.1,
    },
    {
      id: "amult7",
      nameKey: "up_amult7_name",
      descKey: "up_amult7_desc",
      category: "multiplier",
      baseCost: 21724,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.11,
    },
    {
      id: "amult8",
      nameKey: "up_amult8_name",
      descKey: "up_amult8_desc",
      category: "multiplier",
      baseCost: 36930,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.12,
    },
    {
      id: "amult9",
      nameKey: "up_amult9_name",
      descKey: "up_amult9_desc",
      category: "multiplier",
      baseCost: 62782,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.13,
    },
    {
      id: "amult10",
      nameKey: "up_amult10_name",
      descKey: "up_amult10_desc",
      category: "multiplier",
      baseCost: 106729,
      growth: 1.25,
      owned: 0,
      type: "mult",
      target: "auto",
      multiplier: 1.14,
    },

  ],
};

const i18n = {
  en: {
    title: "Amlet Clicker",
    subtitle: "Click to earn coins. Buy upgrades to earn faster.",
    label_coins: "Coins",
    label_per_click: "Per Click",
    label_per_second: "Per Second",
    click_button: "CLICK",
    click_hint: "Tap or click the button",
    loading_text: "Loading...",
    shop_title: "Shop",
    settings_title: "Settings",
    settings_language: "Language",
    settings_interface: "Interface",
    settings_interface_classic: "Classic",
    settings_interface_modern: "Modern",
    settings_short_numbers: "Short numbers",
    tab_play: "Play",
    tab_shop: "Shop",
    tab_settings: "Settings",
    tab_stats: "Stats",
    tab_prestige: "Prestige",
    tab_inventory: "Inventory",
    tab_info: "Info",
    cat_multipliers: "Multipliers",
    cat_autoclickers: "Auto Clickers",
    cat_upgrades: "Upgrades",
    shop_tab_upgrades: "Upgrades",
    shop_tab_skins: "Themes",
    shop_tab_cases: "Cases",
    shop_tab_music: "Music",
    shop_search: "Search items",
    shop_sort_default: "Default",
    shop_sort_cost_asc: "Cost ↑",
    shop_sort_cost_desc: "Cost ↓",
    shop_sort_owned: "Owned",
    buy_mode_1: "Buy x1",
    buy_mode_10: "Buy x10",
    buy_mode_max: "Buy Max",
    reset_button: "Reset",
    tip_text: "Progress is stored locally in your browser.",
    buy_button: "Buy",
    owned_label: "Owned: {count}",
    cost_label: "Cost: {count} coins",
    cost_label_qty: "Cost: {count} coins (x{qty})",
    reset_confirm: "Reset all progress?",
    up_tapsuit_name: "Tap Suit",
    up_tapsuit_desc: "+1 per click",
    up_gyro_name: "Gyro Stabilizer",
    up_gyro_desc: "+3 per click",
    up_pulsecore_name: "Pulse Core",
    up_pulsecore_desc: "+8 per click",
    up_exosleeve_name: "Exo Sleeve",
    up_exosleeve_desc: "+18 per click",
    up_relay_name: "Signal Relay",
    up_relay_desc: "+45 per click",
    up_neurogrip_name: "Neuro Grip",
    up_neurogrip_desc: "+110 per click",
    up_hyperglove_name: "Hyper Glove",
    up_hyperglove_desc: "+260 per click",
    up_chrono_name: "Chrono Driver",
    up_chrono_desc: "+620 per click",
    up_microdrone_name: "Micro Drone",
    up_microdrone_desc: "+1 per second",
    up_pressline_name: "Press Line",
    up_pressline_desc: "+5 per second",
    up_autolab_name: "Auto Lab",
    up_autolab_desc: "+16 per second",
    up_serverfarm_name: "Server Farm",
    up_serverfarm_desc: "+45 per second",
    up_orbitdock_name: "Orbit Dock",
    up_orbitdock_desc: "+130 per second",
    up_nanofactory_name: "Nano Factory",
    up_nanofactory_desc: "+380 per second",
    up_aicloud_name: "AI Cloud",
    up_aicloud_desc: "+980 per second",
    up_stellarforge_name: "Stellar Forge",
    up_stellarforge_desc: "+2600 per second",
    up_focus_name: "Focus Lens",
    up_focus_desc: "x1.10 click power",
    up_overclock_name: "Overclock Unit",
    up_overclock_desc: "x1.10 auto power",
    up_capacitor_name: "Capacitor Bank",
    up_capacitor_desc: "x1.20 click power",
    up_booster_name: "Booster Grid",
    up_booster_desc: "x1.20 auto power",
    up_resonator_name: "Resonator",
    up_resonator_desc: "x1.30 click power",
    up_grid_name: "Power Grid",
    up_grid_desc: "x1.30 auto power",
    stats_title: "Statistics",
    stats_time: "Time Played",
    stats_total: "Total Earned",
    stats_current: "Current Coins",
    skin_classic_name: "Classic",
    skin_classic_desc: "Default look",
    skin_mint_name: "Mint",
    skin_mint_desc: "Fresh green theme",
    skin_sunset_name: "Sunset",
    skin_sunset_desc: "Warm dusk colors",
    skin_neon_name: "Neon",
    skin_neon_desc: "Cyber glow",
    skin_aurora_name: "Aurora",
    skin_aurora_desc: "Northern lights",
    skin_ember_name: "Ember",
    skin_ember_desc: "Warm fire tones",
    skin_ice_name: "Ice",
    skin_ice_desc: "Cold blue glass",
    skin_orchid_name: "Orchid",
    skin_orchid_desc: "Soft violet bloom",
    skin_sand_name: "Sand",
    skin_sand_desc: "Desert gold",
    skin_noir_name: "Noir",
    skin_noir_desc: "Monochrome mood",
    skin_nebula_name: "Nebula",
    skin_nebula_desc: "Exclusive theme",
    skin_royal_name: "Royal",
    skin_royal_desc: "Exclusive theme",
    skin_toxic_name: "Toxic",
    skin_toxic_desc: "Exclusive theme",
    skin_obsidian_name: "Obsidian",
    skin_obsidian_desc: "Exclusive theme",
    skin_spectrum_name: "Spectrum",
    skin_spectrum_desc: "Exclusive theme",
    skin_arcade_name: "Arcade",
    skin_arcade_desc: "Exclusive theme",
    skin_goldrush_name: "Gold Rush",
    skin_goldrush_desc: "Exclusive theme",
    skin_holo_name: "Holo",
    skin_holo_desc: "Exclusive theme",
    skin_inferno_name: "Inferno",
    skin_inferno_desc: "Exclusive theme",
    skin_aether_name: "Aether",
    skin_aether_desc: "Exclusive theme",
    skin_equipped: "Equipped",
    skin_equip: "Equip",
    case_money_name: "Money Case",
    case_money_desc: "100, 200, 400, 500, 800, 1000, 2000, 5000",
    case_exclusive_name: "Exclusive Theme Case",
    case_exclusive_desc: "Small chance to drop an exclusive theme",
    case_open: "Open",
    case_reward_coins: "Coins: +{amount}",
    case_reward_skin: "Theme: {name}",
    case_reward_nothing: "Nothing dropped",
    case_all_owned: "All exclusive themes already owned.",
    case_nothing: "Nothing",
    inventory_title: "Inventory",
    inventory_tab_all: "All",
    inventory_tab_themes: "Themes",
    inventory_tab_music: "Music",
    inventory_search: "Search inventory",
    inventory_themes_count: "Themes",
    inventory_music_count: "Music",
    inventory_equipped: "Equipped Theme",
    inventory_playing: "Playing Music",
    inventory_none: "None",
    inventory_empty_filtered: "Nothing found for current filter.",
    inventory_music_title: "Music",
    inventory_empty: "Inventory is empty.",
    inventory_coin: "Coins",
    inventory_skin: "Theme",
    inventory_music_empty: "No music purchased yet.",
    music_play: "Play",
    music_playing: "Playing",
    music_stop: "Stop",
    music_digital_name: "Digital Dreams",
    music_digital_desc: "Background music",
    music_echoes_name: "Echoes of Joy",
    music_echoes_desc: "Background music",
    music_euphoric_name: "Euphoric Ascent",
    music_euphoric_desc: "Background music",
    info_title: "Info",
    info_tg: "TGK:",
    info_tt: "TT:",
    settings_reduce_motion: "Reduce motion",
    settings_confirm_reset: "Confirm reset",
    settings_save: "Save Tools",
    export_btn: "Export",
    import_btn: "Import",
    invalid_save: "Invalid save code",
    offline_earned: "Offline earned: +{amount}",
    surge_started: "Surge started: income x1.5",
    surge_ended: "Surge ended",
    progress_prestige_title: "Prestige",
    progress_prestige_btn: "Prestige Reset",
    progress_prestige_level: "Prestige level: {level}",
    progress_prestige_bonus: "Global bonus: x{mult}",
    progress_prestige_crit: "Bonus crit chance: +{value}",
    progress_prestige_case: "Case discount: {value}",
    progress_prestige_cost: "Cost: {cost} coins",
    progress_prestige_not_enough: "Not enough coins for prestige",
    progress_prestige_done: "Prestige complete. New level: {level}",
    stats_clicks: "Total Clicks",
    stats_upgrades: "Upgrades Bought",
    stats_cases: "Cases Opened",
    stats_best_streak: "Best Streak",
    achievements_title: "Achievements",
    ach_click_100: "Clicker I",
    ach_click_100_desc: "100 clicks",
    ach_click_1000: "Clicker II",
    ach_click_1000_desc: "1,000 clicks",
    ach_coins_10k: "Savings",
    ach_coins_10k_desc: "10,000 coins",
    ach_auto_100: "Automation",
    ach_auto_100_desc: "100 per second",
    ach_case_5: "Opener",
    ach_case_5_desc: "Open 5 cases",
    ach_theme_5: "Collector",
    ach_theme_5_desc: "Own 5 themes",
    ach_streak_25: "Combo",
    ach_streak_25_desc: "Streak 25",
    ach_upgrade_20: "Builder",
    ach_upgrade_20_desc: "Buy 20 upgrades",
  },
  ru: {
    title: "Amlet Clicker",
    subtitle: "Кликай, чтобы получать монеты. Покупай улучшения, чтобы зарабатывать быстрее.",
    label_coins: "Монеты",
    label_per_click: "За клик",
    label_per_second: "В секунду",
    click_button: "КЛИК",
    click_hint: "Нажми кнопку",
    loading_text: "Загрузка...",
    shop_title: "Магазин",
    settings_title: "Настройки",
    settings_language: "Язык",
    settings_interface: "Интерфейс",
    settings_interface_classic: "Старый",
    settings_interface_modern: "Новый",
    settings_short_numbers: "Короткие числа",
    tab_play: "Игра",
    tab_shop: "Магазин",
    tab_settings: "Настройки",
    tab_stats: "Статистика",
    tab_prestige: "Престиж",
    tab_inventory: "Инвентарь",
    tab_info: "Инфо",
    cat_multipliers: "Множители",
    cat_autoclickers: "Авто кликеры",
    cat_upgrades: "Улучшения",
    shop_tab_upgrades: "Улучшения",
    shop_tab_skins: "Темы",
    shop_tab_cases: "Кейсы",
    shop_tab_music: "Музыка",
    shop_search: "Поиск",
    shop_sort_default: "По умолчанию",
    shop_sort_cost_asc: "Цена ↑",
    shop_sort_cost_desc: "Цена ↓",
    shop_sort_owned: "Куплено",
    buy_mode_1: "Купить x1",
    buy_mode_10: "Купить x10",
    buy_mode_max: "Купить макс",
    reset_button: "Сброс",
    tip_text: "Прогресс сохраняется в браузере.",
    buy_button: "Купить",
    owned_label: "Куплено: {count}",
    cost_label: "Цена: {count} монет",
    cost_label_qty: "Цена: {count} монет (x{qty})",
    reset_confirm: "Сбросить весь прогресс?",
    up_tapsuit_name: "Клик‑костюм",
    up_tapsuit_desc: "+1 за клик",
    up_gyro_name: "Гиро‑стабилизатор",
    up_gyro_desc: "+3 за клик",
    up_pulsecore_name: "Пульс‑ядро",
    up_pulsecore_desc: "+8 за клик",
    up_exosleeve_name: "Экзо‑рукав",
    up_exosleeve_desc: "+18 за клик",
    up_relay_name: "Сигнальное реле",
    up_relay_desc: "+45 за клик",
    up_neurogrip_name: "Нейро‑хват",
    up_neurogrip_desc: "+110 за клик",
    up_hyperglove_name: "Гипер‑перчатка",
    up_hyperglove_desc: "+260 за клик",
    up_chrono_name: "Хроно‑драйвер",
    up_chrono_desc: "+620 за клик",
    up_microdrone_name: "Микро‑дрон",
    up_microdrone_desc: "+1 в секунду",
    up_pressline_name: "Линия пресса",
    up_pressline_desc: "+5 в секунду",
    up_autolab_name: "Авто‑лаборатория",
    up_autolab_desc: "+16 в секунду",
    up_serverfarm_name: "Сервер‑ферма",
    up_serverfarm_desc: "+45 в секунду",
    up_orbitdock_name: "Орбитальный док",
    up_orbitdock_desc: "+130 в секунду",
    up_nanofactory_name: "Нано‑фабрика",
    up_nanofactory_desc: "+380 в секунду",
    up_aicloud_name: "ИИ‑облако",
    up_aicloud_desc: "+980 в секунду",
    up_stellarforge_name: "Звёздная кузня",
    up_stellarforge_desc: "+2600 в секунду",
    up_focus_name: "Фокус‑линза",
    up_focus_desc: "x1.10 сила клика",
    up_overclock_name: "Разгонный модуль",
    up_overclock_desc: "x1.10 авто‑сила",
    up_capacitor_name: "Блок конденсаторов",
    up_capacitor_desc: "x1.20 сила клика",
    up_booster_name: "Сеть ускорителей",
    up_booster_desc: "x1.20 авто‑сила",
    up_resonator_name: "Резонатор",
    up_resonator_desc: "x1.30 сила клика",
    up_grid_name: "Энергосеть",
    up_grid_desc: "x1.30 авто‑сила",
    up_tapmod1_name: "Модуль клика 1",
    up_tapmod1_desc: "+3 за клик",
    up_tapmod2_name: "Модуль клика 2",
    up_tapmod2_desc: "+6 за клик",
    up_tapmod3_name: "Модуль клика 3",
    up_tapmod3_desc: "+9 за клик",
    up_tapmod4_name: "Модуль клика 4",
    up_tapmod4_desc: "+12 за клик",
    up_tapmod5_name: "Модуль клика 5",
    up_tapmod5_desc: "+15 за клик",
    up_tapmod6_name: "Модуль клика 6",
    up_tapmod6_desc: "+18 за клик",
    up_tapmod7_name: "Модуль клика 7",
    up_tapmod7_desc: "+21 за клик",
    up_tapmod8_name: "Модуль клика 8",
    up_tapmod8_desc: "+24 за клик",
    up_tapmod9_name: "Модуль клика 9",
    up_tapmod9_desc: "+27 за клик",
    up_tapmod10_name: "Модуль клика 10",
    up_tapmod10_desc: "+30 за клик",
    up_tapmod11_name: "Модуль клика 11",
    up_tapmod11_desc: "+33 за клик",
    up_tapmod12_name: "Модуль клика 12",
    up_tapmod12_desc: "+36 за клик",
    up_tapmod13_name: "Модуль клика 13",
    up_tapmod13_desc: "+39 за клик",
    up_tapmod14_name: "Модуль клика 14",
    up_tapmod14_desc: "+42 за клик",
    up_tapmod15_name: "Модуль клика 15",
    up_tapmod15_desc: "+45 за клик",
    up_tapmod16_name: "Модуль клика 16",
    up_tapmod16_desc: "+48 за клик",
    up_tapmod17_name: "Модуль клика 17",
    up_tapmod17_desc: "+51 за клик",
    up_tapmod18_name: "Модуль клика 18",
    up_tapmod18_desc: "+54 за клик",
    up_tapmod19_name: "Модуль клика 19",
    up_tapmod19_desc: "+57 за клик",
    up_tapmod20_name: "Модуль клика 20",
    up_tapmod20_desc: "+60 за клик",
    up_automod1_name: "Авто модуль 1",
    up_automod1_desc: "+12 в секунду",
    up_automod2_name: "Авто модуль 2",
    up_automod2_desc: "+24 в секунду",
    up_automod3_name: "Авто модуль 3",
    up_automod3_desc: "+36 в секунду",
    up_automod4_name: "Авто модуль 4",
    up_automod4_desc: "+48 в секунду",
    up_automod5_name: "Авто модуль 5",
    up_automod5_desc: "+60 в секунду",
    up_automod6_name: "Авто модуль 6",
    up_automod6_desc: "+72 в секунду",
    up_automod7_name: "Авто модуль 7",
    up_automod7_desc: "+84 в секунду",
    up_automod8_name: "Авто модуль 8",
    up_automod8_desc: "+96 в секунду",
    up_automod9_name: "Авто модуль 9",
    up_automod9_desc: "+108 в секунду",
    up_automod10_name: "Авто модуль 10",
    up_automod10_desc: "+120 в секунду",
    up_automod11_name: "Авто модуль 11",
    up_automod11_desc: "+132 в секунду",
    up_automod12_name: "Авто модуль 12",
    up_automod12_desc: "+144 в секунду",
    up_automod13_name: "Авто модуль 13",
    up_automod13_desc: "+156 в секунду",
    up_automod14_name: "Авто модуль 14",
    up_automod14_desc: "+168 в секунду",
    up_automod15_name: "Авто модуль 15",
    up_automod15_desc: "+180 в секунду",
    up_automod16_name: "Авто модуль 16",
    up_automod16_desc: "+192 в секунду",
    up_automod17_name: "Авто модуль 17",
    up_automod17_desc: "+204 в секунду",
    up_automod18_name: "Авто модуль 18",
    up_automod18_desc: "+216 в секунду",
    up_automod19_name: "Авто модуль 19",
    up_automod19_desc: "+228 в секунду",
    up_automod20_name: "Авто модуль 20",
    up_automod20_desc: "+240 в секунду",
    up_cmult1_name: "Множитель клика 1",
    up_cmult1_desc: "x1.05 сила клика",
    up_cmult2_name: "Множитель клика 2",
    up_cmult2_desc: "x1.06 сила клика",
    up_cmult3_name: "Множитель клика 3",
    up_cmult3_desc: "x1.07 сила клика",
    up_cmult4_name: "Множитель клика 4",
    up_cmult4_desc: "x1.08 сила клика",
    up_cmult5_name: "Множитель клика 5",
    up_cmult5_desc: "x1.09 сила клика",
    up_cmult6_name: "Множитель клика 6",
    up_cmult6_desc: "x1.10 сила клика",
    up_cmult7_name: "Множитель клика 7",
    up_cmult7_desc: "x1.11 сила клика",
    up_cmult8_name: "Множитель клика 8",
    up_cmult8_desc: "x1.12 сила клика",
    up_cmult9_name: "Множитель клика 9",
    up_cmult9_desc: "x1.13 сила клика",
    up_cmult10_name: "Множитель клика 10",
    up_cmult10_desc: "x1.14 сила клика",
    up_amult1_name: "Множитель авто 1",
    up_amult1_desc: "x1.05 авто‑сила",
    up_amult2_name: "Множитель авто 2",
    up_amult2_desc: "x1.06 авто‑сила",
    up_amult3_name: "Множитель авто 3",
    up_amult3_desc: "x1.07 авто‑сила",
    up_amult4_name: "Множитель авто 4",
    up_amult4_desc: "x1.08 авто‑сила",
    up_amult5_name: "Множитель авто 5",
    up_amult5_desc: "x1.09 авто‑сила",
    up_amult6_name: "Множитель авто 6",
    up_amult6_desc: "x1.10 авто‑сила",
    up_amult7_name: "Множитель авто 7",
    up_amult7_desc: "x1.11 авто‑сила",
    up_amult8_name: "Множитель авто 8",
    up_amult8_desc: "x1.12 авто‑сила",
    up_amult9_name: "Множитель авто 9",
    up_amult9_desc: "x1.13 авто‑сила",
    up_amult10_name: "Множитель авто 10",
    up_amult10_desc: "x1.14 авто‑сила",
    stats_title: "Статистика",
    stats_time: "Время в игре",
    stats_total: "Всего заработано",
    stats_current: "Текущие монеты",
    skin_classic_name: "Классика",
    skin_classic_desc: "Стандартный вид",
    skin_mint_name: "Мята",
    skin_mint_desc: "Свежая зелёная тема",
    skin_sunset_name: "Закат",
    skin_sunset_desc: "Тёплые цвета",
    skin_neon_name: "Неон",
    skin_neon_desc: "Кибер‑свечение",
    skin_aurora_name: "Аврора",
    skin_aurora_desc: "Северное сияние",
    skin_ember_name: "Угли",
    skin_ember_desc: "Тёплые огни",
    skin_ice_name: "Лёд",
    skin_ice_desc: "Холодное стекло",
    skin_orchid_name: "Орхидея",
    skin_orchid_desc: "Мягкий фиолет",
    skin_sand_name: "Песок",
    skin_sand_desc: "Пустынное золото",
    skin_noir_name: "Нуар",
    skin_noir_desc: "Монохром",
    skin_nebula_name: "Туманность",
    skin_nebula_desc: "Эксклюзивная тема",
    skin_royal_name: "Роял",
    skin_royal_desc: "Эксклюзивная тема",
    skin_toxic_name: "Токсик",
    skin_toxic_desc: "Эксклюзивная тема",
    skin_obsidian_name: "Обсидиан",
    skin_obsidian_desc: "Эксклюзивная тема",
    skin_spectrum_name: "Спектр",
    skin_spectrum_desc: "Эксклюзивная тема",
    skin_arcade_name: "Аркада",
    skin_arcade_desc: "Эксклюзивная тема",
    skin_goldrush_name: "Золотая лихорадка",
    skin_goldrush_desc: "Эксклюзивная тема",
    skin_holo_name: "Голографик",
    skin_holo_desc: "Эксклюзивная тема",
    skin_inferno_name: "Инферно",
    skin_inferno_desc: "Эксклюзивная тема",
    skin_aether_name: "Эфир",
    skin_aether_desc: "Эксклюзивная тема",
    skin_equipped: "Выбрано",
    skin_equip: "Применить",
    case_money_name: "Денежный кейс",
    case_money_desc: "100, 200, 400, 500, 800, 1000, 2000, 5000",
    case_exclusive_name: "Кейс эксклюзивных тем",
    case_exclusive_desc: "Небольшой шанс на эксклюзивную тему",
    case_open: "Открыть",
    case_reward_coins: "Монеты: +{amount}",
    case_reward_skin: "Тема: {name}",
    case_reward_nothing: "Ничего не выпало",
    case_all_owned: "Все эксклюзивные темы уже открыты.",
    case_nothing: "Ничего",
    inventory_title: "Инвентарь",
    inventory_tab_all: "Все",
    inventory_tab_themes: "Темы",
    inventory_tab_music: "Музыка",
    inventory_search: "Поиск по инвентарю",
    inventory_themes_count: "Темы",
    inventory_music_count: "Музыка",
    inventory_equipped: "Выбранная тема",
    inventory_playing: "Играет музыка",
    inventory_none: "Нет",
    inventory_empty_filtered: "По текущему фильтру ничего нет.",
    inventory_music_title: "Музыка",
    inventory_empty: "Инвентарь пуст.",
    inventory_coin: "Монеты",
    inventory_skin: "Тема",
    inventory_music_empty: "Музыка ещё не куплена.",
    music_play: "Включить",
    music_playing: "Играет",
    music_stop: "Стоп",
    music_digital_name: "Digital Dreams",
    music_digital_desc: "Фоновая музыка",
    music_echoes_name: "Echoes of Joy",
    music_echoes_desc: "Фоновая музыка",
    music_euphoric_name: "Euphoric Ascent",
    music_euphoric_desc: "Фоновая музыка",
    info_title: "Информация",
    info_tg: "ТГК:",
    info_tt: "ТТ:",
    settings_reduce_motion: "Меньше анимаций",
    settings_confirm_reset: "Подтверждать сброс",
    settings_save: "Сохранение",
    export_btn: "Экспорт",
    import_btn: "Импорт",
    invalid_save: "Неверный код сохранения",
    offline_earned: "Оффлайн доход: +{amount}",
    surge_started: "Рывок начался: доход x1.5",
    surge_ended: "Рывок завершен",
    progress_prestige_title: "Престиж",
    progress_prestige_btn: "Сброс престижа",
    progress_prestige_level: "Уровень престижа: {level}",
    progress_prestige_bonus: "Глобальный бонус: x{mult}",
    progress_prestige_crit: "Бонус к шансу крита: +{value}",
    progress_prestige_case: "Скидка на кейсы: {value}",
    progress_prestige_cost: "Цена: {cost} монет",
    progress_prestige_not_enough: "Недостаточно монет для престижа",
    progress_prestige_done: "Престиж выполнен. Новый уровень: {level}",
    stats_clicks: "Всего кликов",
    stats_upgrades: "Куплено улучшений",
    stats_cases: "Открыто кейсов",
    stats_best_streak: "Лучшая серия",
    achievements_title: "Достижения",
    ach_click_100: "Кликер I",
    ach_click_100_desc: "100 кликов",
    ach_click_1000: "Кликер II",
    ach_click_1000_desc: "1 000 кликов",
    ach_coins_10k: "Копилка",
    ach_coins_10k_desc: "10 000 монет",
    ach_auto_100: "Автоматизация",
    ach_auto_100_desc: "100 в секунду",
    ach_case_5: "Открыватель",
    ach_case_5_desc: "Открыть 5 кейсов",
    ach_theme_5: "Коллекционер",
    ach_theme_5_desc: "5 тем",
    ach_streak_25: "Комбо",
    ach_streak_25_desc: "Серия 25",
    ach_upgrade_20: "Строитель",
    ach_upgrade_20_desc: "Купить 20 улучшений",
  },
};

const dom = {
  preloader: document.getElementById("preloader"),
  coins: document.getElementById("coins"),
  perClick: document.getElementById("perClick"),
  perSecond: document.getElementById("perSecond"),
  clickBtn: document.getElementById("clickBtn"),
  goldenBtn: document.getElementById("goldenBtn"),
  shopList: document.getElementById("shopList"),
  skinList: document.getElementById("skinList"),
  musicList: document.getElementById("musicList"),
  caseList: document.getElementById("caseList"),
  caseMessage: document.getElementById("caseMessage"),
  caseAnimation: document.getElementById("caseAnimation"),
  resetBtn: document.getElementById("resetBtn"),
  languageSelect: document.getElementById("languageSelect"),
  uiStyleSelect: document.getElementById("uiStyleSelect"),
  shortNumbers: document.getElementById("shortNumbers"),
  reduceMotion: document.getElementById("reduceMotion"),
  confirmReset: document.getElementById("confirmReset"),
  saveText: document.getElementById("saveText"),
  exportBtn: document.getElementById("exportBtn"),
  importBtn: document.getElementById("importBtn"),
  shopSearch: document.getElementById("shopSearch"),
  shopSort: document.getElementById("shopSort"),
  buyMode: document.getElementById("buyMode"),
  tabs: Array.from(document.querySelectorAll(".tab")),
  panels: Array.from(document.querySelectorAll(".tab-panel")),
  shopTabs: Array.from(document.querySelectorAll(".shop-tab")),
  shopPanels: Array.from(document.querySelectorAll(".shop-panel")),
  statTime: document.getElementById("statTime"),
  statTotal: document.getElementById("statTotal"),
  statCurrent: document.getElementById("statCurrent"),
  statClicks: document.getElementById("statClicks"),
  statUpgrades: document.getElementById("statUpgrades"),
  statCases: document.getElementById("statCases"),
  statBestStreak: document.getElementById("statBestStreak"),
  prestigeLevelInfo: document.getElementById("prestigeLevelInfo"),
  prestigeBonusInfo: document.getElementById("prestigeBonusInfo"),
  prestigeCritInfo: document.getElementById("prestigeCritInfo"),
  prestigeCaseInfo: document.getElementById("prestigeCaseInfo"),
  prestigeCostInfo: document.getElementById("prestigeCostInfo"),
  prestigeBtn: document.getElementById("prestigeBtn"),
  progressMessage: document.getElementById("progressMessage"),
  inventorySearch: document.getElementById("inventorySearch"),
  inventoryTabs: Array.from(document.querySelectorAll("[data-inv-tab]")),
  invThemesCount: document.getElementById("invThemesCount"),
  invMusicCount: document.getElementById("invMusicCount"),
  invEquippedTheme: document.getElementById("invEquippedTheme"),
  invPlayingMusic: document.getElementById("invPlayingMusic"),
  inventoryList: document.getElementById("inventoryList"),
};

const CRIT_CHANCE_BASE = 0.06;
const CRIT_CHANCE_PITY_STEP = 0.006;
const CRIT_CHANCE_MAX = 0.3;
const CRIT_MULT = 2;
const STREAK_WINDOW_MS = 1500;
const MOMENTUM_GAIN = 0.06;
const MOMENTUM_DECAY_PER_SEC = 0.08;
const MOMENTUM_BONUS_MAX = 0.5;
const OFFLINE_EARN_CAP_MS = 6 * 60 * 60 * 1000;
const OFFLINE_EARN_CAP_COINS = 1000;
const OFFLINE_EARN_RATE = 0.4;
const SURGE_MULT = 1.5;
const SURGE_DURATION_MS = 20000;
const SURGE_INTERVAL_MIN_MS = 90000;
const SURGE_INTERVAL_VAR_MS = 60000;
const PRESTIGE_BASE_COST = 200000;
const PRESTIGE_COST_GROWTH = 1.9;
const PRESTIGE_BONUS_PER_LEVEL = 0.18;
const PRESTIGE_CRIT_BONUS_PER_LEVEL = 0.012;
const PRESTIGE_CRIT_BONUS_MAX = 0.25;
const PRESTIGE_CASE_DISCOUNT_PER_LEVEL = 0.03;
const PRESTIGE_CASE_DISCOUNT_MAX = 0.6;
const clickSound = new Audio("Sounds/click.mp3");
clickSound.preload = "auto";
const musicAudio = new Audio();
musicAudio.loop = true;
musicAudio.volume = 0.45;

function playClickSound() {
  const s = clickSound.cloneNode();
  s.volume = 0.45;
  s.play().catch(() => {});
}

function t(key, params = {}) {
  const lang = state.settings.language in i18n ? state.settings.language : "en";
  const dict = i18n[lang] || i18n.en;
  let value = dict[key] || i18n.en[key] || key;
  for (const [k, v] of Object.entries(params)) {
    value = value.replace(`{${k}}`, v);
  }
  return value;
}

function formatShort(n) {
  const lang = state.settings.language;
  const units = lang === "ru"
    ? ["", "тыс.", "млн", "млрд", "трлн"]
    : ["", "K", "M", "B", "T"];
  let value = Math.floor(n);
  let unitIndex = 0;
  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex += 1;
  }
  const rounded = value >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
  return `${rounded}${units[unitIndex] ? " " + units[unitIndex] : ""}`.trim();
}

function format(n) {
  if (state.settings.shortNumbers) return formatShort(n);
  return Math.floor(n).toLocaleString(state.settings.language === "ru" ? "ru-RU" : "en-US");
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function upgradeCost(item) {
  return Math.floor(item.baseCost * Math.pow(item.growth, item.owned));
}

function totalCostForQty(item, qty) {
  let total = 0;
  for (let i = 0; i < qty; i += 1) {
    total += Math.floor(item.baseCost * Math.pow(item.growth, item.owned + i));
  }
  return total;
}

function maxAffordable(item) {
  let qty = 0;
  let total = 0;
  while (true) {
    const cost = Math.floor(item.baseCost * Math.pow(item.growth, item.owned + qty));
    if (total + cost > state.coins) break;
    total += cost;
    qty += 1;
  }
  return { qty, total };
}

function getBuyMode() {
  return dom.buyMode ? dom.buyMode.value : state.settings.buyMode;
}

function getMasteryMultiplier() {
  const tiers = Math.floor(state.stats.upgradesBought / 25);
  return 1 + tiers * 0.02;
}

function getSurgeMultiplier(now = Date.now()) {
  return now < state.gameplay.surge.activeUntil ? SURGE_MULT : 1;
}

function processSurge(now = Date.now()) {
  const surge = state.gameplay.surge;
  if (now >= surge.nextAt && now >= surge.activeUntil) {
    surge.activeUntil = now + SURGE_DURATION_MS;
    surge.nextAt = now + SURGE_INTERVAL_MIN_MS + Math.floor(Math.random() * SURGE_INTERVAL_VAR_MS);
    surge.wasActive = true;
    if (dom.caseMessage) dom.caseMessage.textContent = t("surge_started");
  } else if (surge.wasActive && now >= surge.activeUntil) {
    surge.wasActive = false;
    if (dom.caseMessage) dom.caseMessage.textContent = t("surge_ended");
  }
}

function grantOfflineEarnings(now = Date.now()) {
  const elapsed = Math.max(0, now - (state.gameplay.lastSessionAt || now));
  const capped = Math.min(elapsed, OFFLINE_EARN_CAP_MS);
  const earned = Math.min(state.perSecond * (capped / 1000) * OFFLINE_EARN_RATE, OFFLINE_EARN_CAP_COINS);
  if (earned > 0) {
    state.coins += earned;
    state.stats.totalEarned += earned;
    if (dom.caseMessage) {
      dom.caseMessage.textContent = t("offline_earned", { amount: format(earned) });
    }
  }
  state.gameplay.lastSessionAt = now;
}

function getPrestigeCost(level = state.progress.prestigeLevel) {
  return Math.floor(PRESTIGE_BASE_COST * Math.pow(PRESTIGE_COST_GROWTH, level));
}

function getPrestigeMultiplier(level = state.progress.prestigeLevel) {
  return 1 + level * PRESTIGE_BONUS_PER_LEVEL;
}

function getPrestigeCritBonus(level = state.progress.prestigeLevel) {
  return Math.min(PRESTIGE_CRIT_BONUS_MAX, level * PRESTIGE_CRIT_BONUS_PER_LEVEL);
}

function getPrestigeCaseDiscount(level = state.progress.prestigeLevel) {
  return Math.min(PRESTIGE_CASE_DISCOUNT_MAX, level * PRESTIGE_CASE_DISCOUNT_PER_LEVEL);
}

function getCaseCost(baseCost) {
  const discount = getPrestigeCaseDiscount();
  return Math.max(1, Math.floor(baseCost * (1 - discount)));
}

function updateProgressMessage(text) {
  if (dom.progressMessage) dom.progressMessage.textContent = text;
}

function prestigeReset() {
  const cost = getPrestigeCost();
  if (state.coins < cost) {
    updateProgressMessage(t("progress_prestige_not_enough"));
    return;
  }
  state.coins = 0;
  for (const u of state.upgrades) u.owned = 0;
  state.settings.music = "none";
  musicAudio.pause();
  musicAudio.src = "";
  state.streak.count = 0;
  state.streak.lastClickTs = 0;
  state.gameplay.noCritClicks = 0;
  state.gameplay.momentum = 0;
  state.gameplay.surge.activeUntil = 0;
  state.gameplay.surge.nextAt = Date.now() + SURGE_INTERVAL_MIN_MS;
  state.gameplay.surge.wasActive = false;
  state.golden.active = false;
  if (dom.goldenBtn) dom.goldenBtn.classList.remove("is-active");
  if (dom.caseMessage) dom.caseMessage.textContent = "";
  state.progress.prestigeLevel += 1;
  recalcRates();
  updateProgressMessage(t("progress_prestige_done", { level: format(state.progress.prestigeLevel) }));
  updateUIFull();
  save();
}

function updateProgressLite() {
  const prestigeLevel = state.progress.prestigeLevel;
  const prestigeCost = getPrestigeCost(prestigeLevel);
  const prestigeMult = getPrestigeMultiplier(prestigeLevel);
  const critBonus = getPrestigeCritBonus(prestigeLevel);
  const caseDiscount = getPrestigeCaseDiscount(prestigeLevel);
  if (dom.prestigeLevelInfo) dom.prestigeLevelInfo.textContent = t("progress_prestige_level", { level: format(prestigeLevel) });
  if (dom.prestigeBonusInfo) dom.prestigeBonusInfo.textContent = t("progress_prestige_bonus", { mult: prestigeMult.toFixed(2) });
  if (dom.prestigeCritInfo) dom.prestigeCritInfo.textContent = t("progress_prestige_crit", { value: `${(critBonus * 100).toFixed(1)}%` });
  if (dom.prestigeCaseInfo) dom.prestigeCaseInfo.textContent = t("progress_prestige_case", { value: `${Math.round(caseDiscount * 100)}%` });
  if (dom.prestigeCostInfo) dom.prestigeCostInfo.textContent = t("progress_prestige_cost", { cost: format(prestigeCost) });
  if (dom.prestigeBtn) dom.prestigeBtn.disabled = state.coins < prestigeCost;
}

function recalcRates() {
  let perClick = 1;
  let perSecond = 0;
  let clickMult = 1;
  let autoMult = 1;

  for (const u of state.upgrades) {
    if (u.type === "click") {
      perClick += u.owned * u.value;
    } else if (u.type === "auto") {
      perSecond += u.owned * u.value;
    } else if (u.type === "mult") {
      const mult = Math.pow(u.multiplier, u.owned);
      if (u.target === "click") clickMult *= mult;
      if (u.target === "auto") autoMult *= mult;
    }
  }

  const mastery = getMasteryMultiplier();
  const prestige = getPrestigeMultiplier();
  state.perClick = perClick * clickMult * mastery * prestige;
  state.perSecond = perSecond * autoMult * mastery * prestige;
}

function renderShop() {
  dom.shopList.innerHTML = "";
  const search = (dom.shopSearch?.value || "").trim().toLowerCase();
  const sortMode = dom.shopSort?.value || state.settings.shopSort;
  const buyMode = getBuyMode();
  const order = [
    { key: "multiplier", titleKey: "cat_multipliers" },
    { key: "auto", titleKey: "cat_autoclickers" },
    { key: "upgrade", titleKey: "cat_upgrades" },
  ];
  const groups = {
    multiplier: [],
    auto: [],
    upgrade: [],
  };

  for (const item of state.upgrades) {
    const groupKey = item.category || "upgrade";
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
  }

  for (const group of order) {
    let items = groups[group.key] || [];
    if (items.length === 0) continue;
    if (search) {
      items = items.filter((item) => {
        const name = t(item.nameKey).toLowerCase();
        const desc = t(item.descKey).toLowerCase();
        return name.includes(search) || desc.includes(search);
      });
    }
    if (items.length === 0) continue;
    if (sortMode === "cost_asc") items.sort((a, b) => a.baseCost - b.baseCost);
    if (sortMode === "cost_desc") items.sort((a, b) => b.baseCost - a.baseCost);
    if (sortMode === "owned") items.sort((a, b) => b.owned - a.owned || a.baseCost - b.baseCost);

    const section = document.createElement("div");
    section.className = "shop-category";
    const title = document.createElement("h3");
    title.className = "shop-category-title";
    title.textContent = t(group.titleKey);
    section.appendChild(title);

    const list = document.createElement("div");
    list.className = "shop-category-list";

    for (const item of items) {
      let qty = 1;
      let cost = upgradeCost(item);
      if (buyMode === "10") {
        qty = 10;
        cost = totalCostForQty(item, qty);
      } else if (buyMode === "max") {
        const max = maxAffordable(item);
        qty = max.qty;
        cost = max.total;
      }
      const wrap = document.createElement("div");
      wrap.className = "shop-item";

      const left = document.createElement("div");
      const itemTitle = document.createElement("h3");
      itemTitle.textContent = t(item.nameKey);
      const meta = document.createElement("div");
      meta.className = "shop-meta";
      meta.textContent = `${t(item.descKey)} | ${t("owned_label", { count: format(item.owned) })}`;
      const badge = document.createElement("div");
      badge.className = "badge";
      if (qty > 1) {
        badge.textContent = t("cost_label_qty", { count: format(cost), qty: qty });
      } else {
        badge.textContent = t("cost_label", { count: format(cost) });
      }
      left.append(itemTitle, meta, badge);

      const buy = document.createElement("button");
      buy.textContent = t("buy_button");
      buy.dataset.cost = String(cost || Number.MAX_SAFE_INTEGER);
      buy.disabled = qty === 0 || state.coins < cost;
      buy.addEventListener("click", () => buyUpgrade(item, qty));

      wrap.append(left, buy);
      list.appendChild(wrap);
    }

    section.appendChild(list);
    dom.shopList.appendChild(section);
  }
}

function applyI18n() {
  document.documentElement.lang = state.settings.language;
  document.title = t("title");
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", t(key));
  });
}

function applyTheme() {
  const active = state.skins.find((s) => s.id === state.settings.skin) || state.skins[0];
  if (!active) return;
  const root = document.documentElement.style;
  root.setProperty("--bg", active.theme.bg);
  root.setProperty("--panel", active.theme.panel);
  root.setProperty("--panel-2", active.theme.panel2);
  root.setProperty("--accent", active.theme.accent);
  root.setProperty("--accent-2", active.theme.accent2);
  root.setProperty("--text", active.theme.text);
  root.setProperty("--muted", active.theme.muted);
  root.setProperty("--good", active.theme.good);
  root.setProperty("--bad", active.theme.bad);
}

function applyInterfaceStyle() {
  document.body.classList.toggle("ui-modern", state.settings.uiStyle === "modern");
}

function renderSkins() {
  dom.skinList.innerHTML = "";
  for (const skin of state.skins) {
    if (skin.caseOnly && !skin.owned) continue;
    const wrap = document.createElement("div");
    wrap.className = "shop-item";

    const left = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = t(skin.nameKey);
    const meta = document.createElement("div");
    meta.className = "shop-meta";
    meta.textContent = t(skin.descKey);
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = skin.cost > 0 ? t("cost_label", { count: format(skin.cost) }) : "";
    left.append(title, meta, badge);

    const button = document.createElement("button");
    const isEquipped = state.settings.skin === skin.id;
    if (skin.owned) {
      button.textContent = isEquipped ? t("skin_equipped") : t("skin_equip");
      button.disabled = isEquipped;
      button.removeAttribute("data-cost");
      button.addEventListener("click", () => equipSkin(skin));
    } else {
      button.textContent = t("buy_button");
      if (skin.caseOnly) {
        button.disabled = true;
        button.removeAttribute("data-cost");
      } else {
        button.dataset.cost = String(skin.cost);
        button.disabled = state.coins < skin.cost;
        button.addEventListener("click", () => buySkin(skin));
      }
    }

    wrap.append(left, button);
    dom.skinList.appendChild(wrap);
  }
}

function renderCases() {
  if (!dom.caseList) return;
  dom.caseList.innerHTML = "";
  for (const item of state.cases) {
    const wrap = document.createElement("div");
    wrap.className = "shop-item";

    const left = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = t(item.nameKey);
    const meta = document.createElement("div");
    meta.className = "shop-meta";
    meta.textContent = t(item.descKey);
    const caseCost = getCaseCost(item.cost);
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = t("cost_label", { count: format(caseCost) });
    left.append(title, meta, badge);

    const button = document.createElement("button");
    button.textContent = t("case_open");
    button.dataset.cost = String(caseCost);
    button.disabled = state.caseOpening || state.coins < caseCost;
    button.addEventListener("click", () => openCase(item));

    wrap.append(left, button);
    dom.caseList.appendChild(wrap);
  }
}

function applyMusic() {
  const currentId = state.settings.music;
  if (!currentId || currentId === "none") {
    musicAudio.pause();
    musicAudio.src = "";
    return;
  }
  const track = state.musicTracks.find((m) => m.id === currentId && m.owned);
  if (!track) {
    musicAudio.pause();
    musicAudio.src = "";
    state.settings.music = "none";
    return;
  }
  if (musicAudio.src && musicAudio.src.includes(track.path)) {
    return;
  }
  musicAudio.src = track.path;
  musicAudio.play().catch(() => {});
}

function renderMusicShop() {
  if (!dom.musicList) return;
  dom.musicList.innerHTML = "";
  for (const item of state.musicTracks) {
    const wrap = document.createElement("div");
    wrap.className = "shop-item";

    const left = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = t(item.nameKey);
    const meta = document.createElement("div");
    meta.className = "shop-meta";
    meta.textContent = t(item.descKey);
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = t("cost_label", { count: format(item.cost) });
    left.append(title, meta, badge);

    const button = document.createElement("button");
    if (!item.owned) {
      button.textContent = t("buy_button");
      button.dataset.cost = String(item.cost);
      button.disabled = state.coins < item.cost;
      button.addEventListener("click", () => buyMusic(item));
    } else {
      const isPlaying = state.settings.music === item.id;
      button.textContent = isPlaying ? t("music_playing") : t("music_play");
      button.disabled = false;
      button.addEventListener("click", () => equipMusic(item));
    }

    wrap.append(left, button);
    dom.musicList.appendChild(wrap);
  }
}

function addInventory(item) {
  if (item.type !== "skin") return;
  state.inventory.unshift({ ...item, ts: Date.now() });
}

function renderInventory() {
  if (!dom.inventoryList) return;
  dom.inventoryList.innerHTML = "";
  const ownedMusic = state.musicTracks.filter((m) => m.owned);
  const ownedSkins = state.skins.filter((s) => s.owned);

  if (dom.invThemesCount) dom.invThemesCount.textContent = format(ownedSkins.length);
  if (dom.invMusicCount) dom.invMusicCount.textContent = format(ownedMusic.length);

  const equippedSkin = state.skins.find((s) => s.id === state.settings.skin && s.owned);
  const playingTrack = state.musicTracks.find((m) => m.id === state.settings.music && m.owned);
  if (dom.invEquippedTheme) dom.invEquippedTheme.textContent = equippedSkin ? t(equippedSkin.nameKey) : t("inventory_none");
  if (dom.invPlayingMusic) dom.invPlayingMusic.textContent = playingTrack ? t(playingTrack.nameKey) : t("inventory_none");

  const allItems = [];
  for (const skin of ownedSkins) {
    allItems.push({
      kind: "theme",
      id: skin.id,
      name: t(skin.nameKey),
      desc: t(skin.descKey),
      active: state.settings.skin === skin.id,
      data: skin,
    });
  }
  for (const track of ownedMusic) {
    allItems.push({
      kind: "music",
      id: track.id,
      name: t(track.nameKey),
      desc: t(track.descKey),
      active: state.settings.music === track.id,
      data: track,
    });
  }

  const tab = state.settings.inventoryTab || "all";
  const search = (dom.inventorySearch?.value || "").trim().toLowerCase();
  let items = allItems.filter((item) => {
    if (tab === "themes" && item.kind !== "theme") return false;
    if (tab === "music" && item.kind !== "music") return false;
    if (!search) return true;
    return item.name.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search);
  });

  items = items.sort((a, b) => Number(b.active) - Number(a.active) || a.name.localeCompare(b.name));
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "shop-meta";
    empty.textContent = allItems.length === 0 ? t("inventory_empty") : t("inventory_empty_filtered");
    dom.inventoryList.appendChild(empty);
    return;
  }

  for (const item of items) {
    const wrap = document.createElement("div");
    wrap.className = "inventory-item";
    const left = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = item.name;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${item.kind === "theme" ? t("inventory_skin") : t("inventory_music_title")} | ${item.desc}`;
    left.append(title, meta);
    wrap.appendChild(left);

    const btn = document.createElement("button");
    if (item.kind === "theme") {
      const isEquipped = state.settings.skin === item.data.id;
      btn.textContent = isEquipped ? t("skin_equipped") : t("skin_equip");
      btn.disabled = isEquipped;
      btn.addEventListener("click", () => equipSkin(item.data));
    } else {
      const isPlaying = state.settings.music === item.data.id;
      btn.textContent = isPlaying ? t("music_stop") : t("music_play");
      btn.disabled = false;
      btn.addEventListener("click", () => {
        state.settings.music = isPlaying ? "none" : item.data.id;
        applyMusic();
        updateUIFull();
        save();
      });
    }

    wrap.appendChild(btn);
    dom.inventoryList.appendChild(wrap);
  }
}

function updateCounters() {
  dom.coins.textContent = format(state.coins);
  dom.perClick.textContent = format(state.perClick);
  dom.perSecond.textContent = format(state.perSecond);
  dom.statTime.textContent = formatTime(state.stats.timePlayedMs);
  dom.statTotal.textContent = format(state.stats.totalEarned);
  dom.statCurrent.textContent = format(state.coins);
  dom.statClicks.textContent = format(state.stats.totalClicks);
  dom.statUpgrades.textContent = format(state.stats.upgradesBought);
  dom.statCases.textContent = format(state.stats.casesOpened);
  dom.statBestStreak.textContent = format(state.stats.bestStreak);
  updateProgressLite();
}

function updateButtonStates() {
  const buttons = document.querySelectorAll("[data-cost]");
  buttons.forEach((btn) => {
    const cost = Number(btn.dataset.cost);
    if (!Number.isFinite(cost)) return;
    btn.disabled = state.caseOpening || state.coins < cost;
  });
}

function updateUIFull() {
  updateCounters();
  applyI18n();
  applyTheme();
  applyInterfaceStyle();
  renderShop();
  renderSkins();
  renderMusicShop();
  renderCases();
  setActiveInventoryTab(state.settings.inventoryTab || "all");
  renderInventory();
  applyMusic();
  updateButtonStates();
}

function updateUILite() {
  updateCounters();
  updateButtonStates();
}

function animateClickButton() {
  if (!dom.clickBtn) return;
  if (state.settings.uiStyle !== "modern") return;
  if (state.settings.reduceMotion) return;
  dom.clickBtn.classList.remove("click-pop");
  void dom.clickBtn.offsetWidth;
  dom.clickBtn.classList.add("click-pop");
  setTimeout(() => dom.clickBtn?.classList.remove("click-pop"), 470);
}

function clickOnce() {
  playClickSound();
  animateClickButton();
  const nowTs = Date.now();
  processSurge(nowTs);
  const now = Date.now();
  if (now - state.streak.lastClickTs <= STREAK_WINDOW_MS) {
    state.streak.count += 1;
  } else {
    state.streak.count = 1;
  }
  state.streak.lastClickTs = now;
  if (state.streak.count > state.stats.bestStreak) {
    state.stats.bestStreak = state.streak.count;
  }

  const streakBonus = 1 + Math.min(state.streak.count * 0.02, 0.5);
  state.gameplay.momentum = Math.min(1, state.gameplay.momentum + MOMENTUM_GAIN);
  const momentumBonus = 1 + Math.min(MOMENTUM_BONUS_MAX, state.gameplay.momentum * MOMENTUM_BONUS_MAX);
  const critChance = Math.min(
    CRIT_CHANCE_MAX,
    CRIT_CHANCE_BASE + getPrestigeCritBonus() + state.gameplay.noCritClicks * CRIT_CHANCE_PITY_STEP
  );
  const isCrit = Math.random() < critChance;
  if (isCrit) {
    state.gameplay.noCritClicks = 0;
  } else {
    state.gameplay.noCritClicks += 1;
  }
  const surgeBonus = getSurgeMultiplier(nowTs);
  const earned = state.perClick * streakBonus * momentumBonus * surgeBonus * (isCrit ? CRIT_MULT : 1);
  state.coins += earned;
  state.stats.totalEarned += earned;
  state.stats.totalClicks += 1;
  updateUILite();
  save();
}

function buyUpgrade(item, qty = 1) {
  if (qty <= 0) return;
  const cost = totalCostForQty(item, qty);
  if (state.coins < cost) return;
  state.coins -= cost;
  item.owned += qty;
  state.stats.upgradesBought += qty;
  recalcRates();
  updateUIFull();
  save();
}

function buySkin(skin) {
  if (skin.owned) return;
  if (state.coins < skin.cost) return;
  state.coins -= skin.cost;
  skin.owned = true;
  state.settings.skin = skin.id;
  updateUIFull();
  save();
}

function buyMusic(track) {
  if (track.owned) return;
  if (state.coins < track.cost) return;
  state.coins -= track.cost;
  track.owned = true;
  state.settings.music = track.id;
  applyMusic();
  updateUIFull();
  save();
}

function equipMusic(track) {
  if (!track.owned) return;
  state.settings.music = state.settings.music === track.id ? "none" : track.id;
  applyMusic();
  updateUIFull();
  save();
}

function equipSkin(skin) {
  if (!skin.owned) return;
  state.settings.skin = skin.id;
  updateUIFull();
  save();
}

function runRoulette(items, finalText, onDone) {
  if (!dom.caseAnimation) {
    onDone();
    return;
  }
  if (state.settings.reduceMotion) {
    dom.caseAnimation.textContent = finalText;
    onDone();
    return;
  }
  let index = 0;
  const start = Date.now();
  const duration = 3200;
  const minStep = 70;
  const maxStep = 220;
  dom.caseAnimation.classList.remove("is-active");
  void dom.caseAnimation.offsetWidth;
  dom.caseAnimation.classList.add("is-active");

  const tick = () => {
    const elapsed = Date.now() - start;
    const tNorm = Math.min(1, elapsed / duration);
    const easeOut = 1 - Math.pow(1 - tNorm, 3);
    const step = Math.round(minStep + (maxStep - minStep) * easeOut);
    dom.caseAnimation.textContent = items[index % items.length];
    index += 1;
    if (elapsed >= duration) {
      dom.caseAnimation.textContent = finalText;
      setTimeout(() => {
        dom.caseAnimation.classList.remove("is-active");
        onDone();
      }, 700);
      return;
    }
    setTimeout(tick, step);
  };
  tick();
}

function scheduleGolden() {
  if (!dom.goldenBtn) return;
  if (state.golden.timeoutId) clearTimeout(state.golden.timeoutId);
  const delay = 15000 + Math.floor(Math.random() * 15000);
  state.golden.timeoutId = setTimeout(() => {
    state.golden.active = true;
    dom.goldenBtn.classList.add("is-active");
    setTimeout(() => {
      if (state.golden.active) {
        state.golden.active = false;
        dom.goldenBtn.classList.remove("is-active");
        scheduleGolden();
      }
    }, 5000);
  }, delay);
}

function collectGolden() {
  if (!state.golden.active) return;
  state.golden.active = false;
  dom.goldenBtn.classList.remove("is-active");
  const reward = Math.max(10, Math.floor(state.perClick * 20));
  state.coins += reward;
  state.stats.totalEarned += reward;
  state.stats.totalClicks += 1;
  if (dom.caseMessage) dom.caseMessage.textContent = t("case_reward_coins", { amount: format(reward) });
  updateUILite();
  save();
  scheduleGolden();
}

function openCase(item) {
  const caseCost = getCaseCost(item.cost);
  if (state.caseOpening) return;
  if (caseCost > state.coins) return;
  state.caseOpening = true;
  updateButtonStates();
  if (dom.caseMessage) dom.caseMessage.textContent = "";

  const finish = () => {
    state.caseOpening = false;
    updateButtonStates();
  };

  if (item.id === "money_case") {
    const rollItems = item.coins.map((c) => `+${format(c)}`);
    const reward = item.coins[Math.floor(Math.random() * item.coins.length)];
    const finalText = `+${format(reward)}`;
    runRoulette(rollItems, finalText, () => {
      state.coins -= caseCost;
      state.coins += reward;
      state.stats.totalEarned += reward;
      state.stats.casesOpened += 1;
      if (dom.caseMessage) {
        dom.caseMessage.textContent = t("case_reward_coins", { amount: format(reward) });
      }
      updateUIFull();
      save();
      finish();
    });
    return;
  }

  if (item.id === "exclusive_case") {
    const available = item.skins.filter((id) => {
      const skin = state.skins.find((s) => s.id === id);
      return skin && !skin.owned;
    });
    if (available.length === 0) {
      if (dom.caseMessage) dom.caseMessage.textContent = t("case_all_owned");
      state.caseOpening = false;
      updateButtonStates();
      return;
    }
    const rollItems = item.skins.map((id) => {
      const skin = state.skins.find((s) => s.id === id);
      return skin ? t(skin.nameKey) : id;
    });
    rollItems.unshift(t("case_nothing"));

    const nothingChance = 0.6;
    const gotNothing = Math.random() < nothingChance;
    const chosenId = gotNothing
      ? null
      : available[Math.floor(Math.random() * available.length)];
    const chosenSkin = chosenId ? state.skins.find((s) => s.id === chosenId) : null;
    const finalText = gotNothing ? t("case_nothing") : (chosenSkin ? t(chosenSkin.nameKey) : chosenId);
    runRoulette(rollItems, finalText, () => {
      state.coins -= caseCost;
      if (chosenSkin && chosenId) {
        chosenSkin.owned = true;
        addInventory({ type: "skin", skinId: chosenId });
        if (dom.caseMessage) {
          dom.caseMessage.textContent = t("case_reward_skin", { name: finalText });
        }
      } else if (dom.caseMessage) {
        dom.caseMessage.textContent = t("case_reward_nothing");
      }
      state.stats.casesOpened += 1;
      updateUIFull();
      save();
      finish();
    });
  }
}

function tick() {
  const now = Date.now();
  processSurge(now);
  const delta = Math.min(1000, Math.max(0, now - state.stats.lastTick));
  state.stats.timePlayedMs += delta;
  state.stats.lastTick = now;
  state.gameplay.momentum = Math.max(0, state.gameplay.momentum - MOMENTUM_DECAY_PER_SEC * (delta / 1000));
  const surgeBonus = getSurgeMultiplier(now);
  if (state.perSecond > 0) {
    const earned = state.perSecond * (delta / 1000) * surgeBonus;
    state.coins += earned;
    state.stats.totalEarned += earned;
    updateUILite();
    save();
  } else {
    updateUILite();
    save();
  }
}

function buildSaveData() {
  return {
    coins: state.coins,
    upgrades: state.upgrades.map((u) => ({ id: u.id, owned: u.owned })),
    skins: state.skins.map((s) => ({ id: s.id, owned: s.owned })),
    musicTracks: state.musicTracks.map((m) => ({ id: m.id, owned: m.owned })),
    settings: state.settings,
    activeTab: document.querySelector(".tab.is-active")?.dataset.tab || "play",
    activeShopTab: document.querySelector(".shop-tab.is-active")?.dataset.shopTab || "upgrades",
    stats: state.stats,
    gameplay: state.gameplay,
    progress: state.progress,
    inventory: state.inventory.filter((i) => i && i.type === "skin"),
  };
}

function save() {
  localStorage.setItem("clicker_shop_save", JSON.stringify(buildSaveData()));
}

function load() {
  const raw = localStorage.getItem("clicker_shop_save");
  const browserLang = (navigator.language || "en").toLowerCase();
  state.settings.language = browserLang.startsWith("ru") ? "ru" : "en";
  if (!raw) {
    state.gameplay.lastSessionAt = Date.now();
    return;
  }
  try {
    const data = JSON.parse(raw);
    if (typeof data.coins === "number") state.coins = data.coins;
    if (data.settings) {
      if (data.settings.language === "ru" || data.settings.language === "en") {
        state.settings.language = data.settings.language;
      }
      if (typeof data.settings.shortNumbers === "boolean") {
        state.settings.shortNumbers = data.settings.shortNumbers;
      }
      if (data.settings.uiStyle === "classic" || data.settings.uiStyle === "modern") {
        state.settings.uiStyle = data.settings.uiStyle;
      }
      if (typeof data.settings.skin === "string") {
        state.settings.skin = data.settings.skin;
      }
      if (typeof data.settings.music === "string") {
        state.settings.music = data.settings.music;
      }
      if (typeof data.settings.reduceMotion === "boolean") {
        state.settings.reduceMotion = data.settings.reduceMotion;
      }
      if (typeof data.settings.confirmReset === "boolean") {
        state.settings.confirmReset = data.settings.confirmReset;
      }
      if (typeof data.settings.buyMode === "string") {
        state.settings.buyMode = data.settings.buyMode;
      }
      if (typeof data.settings.shopSort === "string") {
        state.settings.shopSort = data.settings.shopSort;
      }
      if (data.settings.inventoryTab === "all" || data.settings.inventoryTab === "themes" || data.settings.inventoryTab === "music") {
        state.settings.inventoryTab = data.settings.inventoryTab;
      }
    }
    if (data.stats) {
      if (typeof data.stats.totalEarned === "number") state.stats.totalEarned = data.stats.totalEarned;
      if (typeof data.stats.timePlayedMs === "number") state.stats.timePlayedMs = data.stats.timePlayedMs;
      if (typeof data.stats.lastTick === "number") state.stats.lastTick = data.stats.lastTick;
      if (typeof data.stats.totalClicks === "number") state.stats.totalClicks = data.stats.totalClicks;
      if (typeof data.stats.upgradesBought === "number") state.stats.upgradesBought = data.stats.upgradesBought;
      if (typeof data.stats.casesOpened === "number") state.stats.casesOpened = data.stats.casesOpened;
      if (typeof data.stats.bestStreak === "number") state.stats.bestStreak = data.stats.bestStreak;
    }
    if (data.gameplay) {
      if (typeof data.gameplay.noCritClicks === "number") state.gameplay.noCritClicks = data.gameplay.noCritClicks;
      if (typeof data.gameplay.momentum === "number") state.gameplay.momentum = data.gameplay.momentum;
      if (typeof data.gameplay.lastSessionAt === "number") state.gameplay.lastSessionAt = data.gameplay.lastSessionAt;
      if (data.gameplay.surge) {
        if (typeof data.gameplay.surge.activeUntil === "number") state.gameplay.surge.activeUntil = data.gameplay.surge.activeUntil;
        if (typeof data.gameplay.surge.nextAt === "number") state.gameplay.surge.nextAt = data.gameplay.surge.nextAt;
        if (typeof data.gameplay.surge.wasActive === "boolean") state.gameplay.surge.wasActive = data.gameplay.surge.wasActive;
      }
    }
    if (data.progress) {
      if (typeof data.progress.prestigeLevel === "number") state.progress.prestigeLevel = Math.max(0, data.progress.prestigeLevel);
    }
    if (Array.isArray(data.upgrades)) {
      for (const saved of data.upgrades) {
        const match = state.upgrades.find((u) => u.id === saved.id);
        if (match && typeof saved.owned === "number") {
          match.owned = saved.owned;
        }
      }
    }
    if (Array.isArray(data.skins)) {
      for (const saved of data.skins) {
        const match = state.skins.find((s) => s.id === saved.id);
        if (match && typeof saved.owned === "boolean") {
          match.owned = saved.owned;
        }
      }
    }
    if (Array.isArray(data.musicTracks)) {
      for (const saved of data.musicTracks) {
        const match = state.musicTracks.find((m) => m.id === saved.id);
        if (match && typeof saved.owned === "boolean") {
          match.owned = saved.owned;
        }
      }
    }
    if (Array.isArray(data.inventory)) {
      state.inventory = data.inventory.filter((i) => i && i.type === "skin");
    }
    const classic = state.skins.find((s) => s.id === "classic");
    if (classic) classic.owned = true;
    const equipped = state.skins.find((s) => s.id === state.settings.skin);
    if (!equipped || !equipped.owned) state.settings.skin = "classic";
    if (typeof data.activeTab === "string") {
      setActiveTab(data.activeTab);
    }
    if (typeof data.activeShopTab === "string") {
      setActiveShopTab(data.activeShopTab);
    }
    recalcRates();
    grantOfflineEarnings(Date.now());
  } catch {
    // ignore corrupted saves
  }
}

function reset() {
  if (state.settings.confirmReset && !confirm(t("reset_confirm"))) return;
  state.coins = 0;
  for (const u of state.upgrades) u.owned = 0;
  for (const s of state.skins) s.owned = s.id === "classic";
  for (const m of state.musicTracks) m.owned = false;
  state.settings.skin = "classic";
  state.settings.music = "none";
  state.settings.inventoryTab = "all";
  if (dom.inventorySearch) dom.inventorySearch.value = "";
  musicAudio.pause();
  musicAudio.src = "";
  state.stats.totalEarned = 0;
  state.stats.timePlayedMs = 0;
  state.stats.lastTick = Date.now();
  state.stats.totalClicks = 0;
  state.stats.upgradesBought = 0;
  state.stats.casesOpened = 0;
  state.stats.bestStreak = 0;
  state.streak.count = 0;
  state.streak.lastClickTs = 0;
  state.gameplay.noCritClicks = 0;
  state.gameplay.momentum = 0;
  state.gameplay.lastSessionAt = Date.now();
  state.gameplay.surge.activeUntil = 0;
  state.gameplay.surge.nextAt = Date.now() + SURGE_INTERVAL_MIN_MS;
  state.gameplay.surge.wasActive = false;
  state.progress.prestigeLevel = 0;
  state.golden.active = false;
  if (dom.goldenBtn) dom.goldenBtn.classList.remove("is-active");
  state.inventory = [];
  if (dom.caseMessage) dom.caseMessage.textContent = "";
  recalcRates();
  updateUIFull();
  save();
}

function bindSettings() {
  dom.languageSelect.value = state.settings.language;
  if (dom.uiStyleSelect) dom.uiStyleSelect.value = state.settings.uiStyle;
  dom.shortNumbers.checked = state.settings.shortNumbers;
  dom.reduceMotion.checked = state.settings.reduceMotion;
  dom.confirmReset.checked = state.settings.confirmReset;

  dom.languageSelect.addEventListener("change", (e) => {
    state.settings.language = e.target.value === "ru" ? "ru" : "en";
    updateUIFull();
    save();
  });

  dom.uiStyleSelect?.addEventListener("change", (e) => {
    state.settings.uiStyle = e.target.value === "modern" ? "modern" : "classic";
    applyInterfaceStyle();
    save();
  });

  dom.shortNumbers.addEventListener("change", (e) => {
    state.settings.shortNumbers = !!e.target.checked;
    updateUIFull();
    save();
  });

  dom.reduceMotion.addEventListener("change", (e) => {
    state.settings.reduceMotion = !!e.target.checked;
    save();
  });

  dom.confirmReset.addEventListener("change", (e) => {
    state.settings.confirmReset = !!e.target.checked;
    save();
  });

  dom.exportBtn.addEventListener("click", () => {
    const data = buildSaveData();
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    dom.saveText.value = encoded;
  });

  dom.importBtn.addEventListener("click", () => {
    const raw = dom.saveText.value.trim();
    if (!raw) return;
    try {
      const json = decodeURIComponent(escape(atob(raw)));
      const data = JSON.parse(json);
      localStorage.setItem("clicker_shop_save", JSON.stringify(data));
      load();
      recalcRates();
      updateUIFull();
      if (dom.caseMessage) dom.caseMessage.textContent = "";
    } catch {
      if (dom.caseMessage) dom.caseMessage.textContent = t("invalid_save");
    }
  });
}

function setActiveTab(tabName) {
  const exists = dom.tabs.some((tab) => tab.dataset.tab === tabName);
  const safeTab = exists ? tabName : "play";
  dom.tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === safeTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  dom.panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `tab-${safeTab}`);
  });
}

function setActiveShopTab(tabName) {
  dom.shopTabs.forEach((tab) => {
    const isActive = tab.dataset.shopTab === tabName;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  dom.shopPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `shop-${tabName}`);
  });
}

function bindTabs() {
  dom.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.tab);
      save();
    });
  });
}

function bindShopTabs() {
  dom.shopTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveShopTab(tab.dataset.shopTab);
      save();
    });
  });
}

function hidePreloader() {
  if (!dom.preloader) return;
  dom.preloader.classList.add("is-hidden");
}

function bindShopControls() {
  if (dom.buyMode) dom.buyMode.value = state.settings.buyMode;
  if (dom.shopSort) dom.shopSort.value = state.settings.shopSort;

  dom.buyMode?.addEventListener("change", (e) => {
    state.settings.buyMode = e.target.value;
    updateUIFull();
    save();
  });

  dom.shopSort?.addEventListener("change", (e) => {
    state.settings.shopSort = e.target.value;
    updateUIFull();
    save();
  });

  dom.shopSearch?.addEventListener("input", () => {
    updateUIFull();
  });
}

function setActiveInventoryTab(tabName) {
  const next = (tabName === "themes" || tabName === "music") ? tabName : "all";
  state.settings.inventoryTab = next;
  dom.inventoryTabs.forEach((tab) => {
    const isActive = tab.dataset.invTab === next;
    tab.classList.toggle("is-active", isActive);
  });
}

function bindInventoryControls() {
  setActiveInventoryTab(state.settings.inventoryTab || "all");
  dom.inventoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveInventoryTab(tab.dataset.invTab);
      updateUIFull();
      save();
    });
  });

  dom.inventorySearch?.addEventListener("input", () => {
    updateUIFull();
  });
}

function bindProgressControls() {
  dom.prestigeBtn?.addEventListener("click", () => {
    prestigeReset();
  });
}

function init() {
  load();
  state.stats.lastTick = Date.now();
  recalcRates();
  bindTabs();
  bindShopTabs();
  bindShopControls();
  bindInventoryControls();
  bindProgressControls();
  bindSettings();
  updateUIFull();
  dom.clickBtn.addEventListener("click", clickOnce);
  dom.goldenBtn?.addEventListener("click", collectGolden);
  dom.resetBtn.addEventListener("click", reset);
  window.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
    if (e.code === "Space") {
      e.preventDefault();
      clickOnce();
    }
  });
  scheduleGolden();
  setInterval(tick, 100);
  setTimeout(hidePreloader, 250);
}

init();
