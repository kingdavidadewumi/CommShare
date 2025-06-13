import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../Screens/HomeScreen';
import { CreateEstate } from '../Screens/CreateEstate';
import { Communities } from '../Screens/Communities';
import { Profile } from '../Screens/Profile';
import { EditProfile } from '../Screens/EditProfile';
import GroupList from '../Screens/GroupList';
import { LogIn } from '../Screens/LogIn';
import { SignUp } from '../Screens/SignUp';
import { ForgotPassword } from '../Screens/ForgotPassword';
import { Estate } from '../Screens/Estate';
import { UpdateEstate } from '../Screens/UpdateEstate';
import { AddUsers } from '../Screens/AddUsers';
import {Residents} from '../Screens/Residents';
import {Contributions} from '../Screens/Contributions';
import {AddContribution} from '../Screens/AddContribution';
import { Payment } from '../Screens/Payment';

const Stack = createStackNavigator();
export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" >
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreateEstate" component={CreateEstate} />
                <Stack.Screen name="Communities" component={Communities} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                {/* <Stack.Screen name="GroupList" component={GroupList} /> */}
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Estate" component={Estate} />
                <Stack.Screen name="UpdateEstate" component={UpdateEstate} />
                <Stack.Screen name="AddUsers" component={AddUsers} /> 
                <Stack.Screen name="Residents" component={Residents} /> 
                <Stack.Screen name="Contributions" component={Contributions} /> 
                <Stack.Screen name="AddContribution" component={AddContribution} /> 
                 <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />

                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}