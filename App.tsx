import { SafeAreaView } from "react-native"
import { PaperProvider } from "react-native-paper";

import IonIcon from 'react-native-vector-icons/Ionicons'
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen";
import { HomeWorkScreen } from "./src/presentation/screens/HomeWorkScreen";

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Gonzalo Piccinini" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}

        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}

export default App;