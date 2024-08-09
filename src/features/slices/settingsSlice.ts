import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type ThemeProps = "system" | "light" | "dark" | "pureBlack";

export type AppearanceProps = {
  colors: {
    theme: ThemeProps;
  };
};
export type ControlsProps = {};
export type StorageProps = {};
export type OthersProps = {
  battery: {
    optimizationDisabled: boolean;
  };
};

export interface SettingsProps {
  appearance: AppearanceProps;
  controls: ControlsProps;
  storage: StorageProps;
  others: OthersProps;
  info: {};
}

const initialState: SettingsProps = {
  appearance: {
    colors: {
      theme: "system",
    },
  },
  controls: {},
  storage: {},
  others: {
    battery: {
      optimizationDisabled: false,
    },
  },
  info: {},
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setappearance: (
      { appearance },
      { payload }: PayloadAction<AppearanceProps>,
    ) => {
      appearance.colors.theme = payload.colors.theme;
    },
    setcontrols: (
      { controls },
      { payload }: PayloadAction<ControlsProps>,
    ) => {},
    setstorage: ({ storage }, { payload }: PayloadAction<StorageProps>) => {
      storage = {};
    },
    setothers: ({ others }, { payload }: PayloadAction<OthersProps>) => {
      others = {
        battery: {
          optimizationDisabled: payload.battery.optimizationDisabled,
        },
      };
    },
  },
});

export const { setappearance, setcontrols, setstorage, setothers } =
  settingsSlice.actions;

export default settingsSlice.reducer;
