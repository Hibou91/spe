import colorFunctions from "../utils/colorFunctions";

export default (color, colors) => {
  colors.value.brandPrimary.value = color;
  colors.value.brandPrimaryDarkest.value = colorFunctions.lighten(color, 20);
  colors.value.brandPrimaryDarker.value = colorFunctions.lighten(color, 40);
  colors.value.brandPrimaryLighter.value = colorFunctions.lighten(color, 60);
  colors.value.brandPrimaryLightest.value = colorFunctions.lighten(color, 80);
  colors.value.brandPrimaryOpacity.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 60),
    30
  );

  colors.value.textPrimary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 20),
    30
  );
  colors.value.textSecondary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 30),
    30
  );
  colors.value.textTertiary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 50),
    30
  );
  colors.value.textWhite.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 99),
    1
  );

  colors.value.backgroundPrimary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 99),
    1
  );
  colors.value.backgroundSecondary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 95),
    5
  );
  colors.value.backgroundTertiary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 90),
    10
  );

  colors.value.borderPrimary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 95),
    5
  );
  colors.value.borderSecondary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 90),
    10
  );
  colors.value.borderTertiary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 85),
    15
  );

  colors.value.selectPrimary.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 85),
    15
  );
  colors.value.selectPrimaryLighter.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 85),
    15
  );
  colors.value.selectPrimaryDarker.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 85),
    15
  );

  colors.value.spNavbarDividerColor.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 50),
    70
  );
  colors.value.navbarInverseBg.value = colorFunctions.lighten(color, 20);
  colors.value.navbarInverseLinkColor.value = colors.value.textWhite.value;
  colors.value.navbarInverseLinkHoverColor.value = "#ffffff";

  colors.value.linkColor.value = colors.value.brandPrimaryLightest.value;
  colors.value.linkHoverColor.value = colors.value.brandPrimaryDarker.value;

  colors.value.inputBorderFocus.value = colors.value.brandPrimary.value;

  colors.value.brandDanger.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#c42033", 30),
    60
  );
  colors.value.brandWarning.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#f1e869", 30),
    80
  );
  colors.value.brandModerate.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#8B6BFF", 30),
    60
  );
  colors.value.brandLow.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#9698A4", 30),
    60
  );
  colors.value.brandSuccess.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#7eb64d", 30),
    60
  );
  colors.value.brandInfo.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#2e8cca", 30),
    80
  );

  colors.value.brandDangerDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#c42033", 30),
    50
  );
  colors.value.brandWarningDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#f1e869", 30),
    70
  );
  colors.value.brandModerateDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#8B6BFF", 30),
    50
  );
  colors.value.brandLowDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#9698A4", 30),
    50
  );
  colors.value.brandSuccessDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#7eb64d", 30),
    50
  );
  colors.value.brandInfoDarker.value = colorFunctions.lighten(
    colorFunctions.mix(color, "#2e8cca", 30),
    70
  );

  colors.value.btnSuccessBg.value = colors.value.brandSuccessDarker.value;
  colors.value.btnInfoBg.value = colors.value.brandInfoDarker.value;
  colors.value.btnWarningBg.value = colors.value.brandWarningDarker.value;
  colors.value.btnDangerBg.value = colors.value.brandDangerDarker.value;

  colors.value.stateSuccessBg.value = colorFunctions.lighten(
    colors.value.brandSuccess.value,
    85
  );
  colors.value.stateInfoBg.value = colorFunctions.lighten(
    colors.value.brandInfo.value,
    85
  );
  colors.value.stateWarningBg.value = colorFunctions.lighten(
    colors.value.brandWarning.value,
    90
  );
  colors.value.stateDangerBg.value = colorFunctions.lighten(
    colors.value.brandDanger.value,
    90
  );

  colors.value.colorDarkest.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 10),
    90
  );
  colors.value.colorDarker.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 15),
    85
  );
  colors.value.colorDark.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 20),
    80
  );
  colors.value.colorDisabled.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 50),
    0
  );
  colors.value.colorLight.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 90),
    10
  );
  colors.value.colorLighter.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 95),
    5
  );
  colors.value.colorLightest.value = colorFunctions.saturate(
    colorFunctions.lighten(color, 99),
    1
  );
  colors.value.colorAccent.value = color;
  colors.value.colorAccentLight.value = colorFunctions.lighten(color, 20);
  colors.value.colorAccentLightest.value = colorFunctions.lighten(color, 20);
};
