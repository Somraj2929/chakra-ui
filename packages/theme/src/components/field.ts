import { fieldAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $fg = cssVar("form-control-color")

const baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg.variable]: "colors.red.500",
  _dark: {
    [$fg.variable]: "colors.red.300",
  },
  color: $fg.reference,
})

const baseStyleHelpText = defineStyle({
  mt: "2",
  [$fg.variable]: "colors.gray.600",
  _dark: {
    [$fg.variable]: "colors.whiteAlpha.600",
  },
  color: $fg.reference,
  lineHeight: "normal",
  fontSize: "sm",
})

const baseStyleRoot = defineStyle({
  width: "100%",
  position: "relative",
})

const baseStyle = definePartsStyle({
  root: baseStyleRoot,
  requiredIndicator: baseStyleRequiredIndicator,
  helpText: baseStyleHelpText,
})

export const fieldTheme = defineMultiStyleConfig({
  baseStyle,
})
