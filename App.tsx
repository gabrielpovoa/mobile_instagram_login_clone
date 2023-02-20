import { Home } from "./src/screens/Home/Index";
import { ThemeProvider } from "styled-components/native";
import { StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'

import light from "./src/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar backgroundColor="#9c9c9c" translucent={false} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          <Home />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}
