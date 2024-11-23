import { colors } from "@/style/colors";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";


type TabOptions = {
    label: string;
    icon: keyof typeof AntDesign.glyphMap;
};

const TabsLayout: React.FC = () => {
    function tabOptions({ label, icon }: TabOptions): any {
        return {
            headerShown: false,
            tabBarLabel: label,
            tabBarActiveTintColor: colors.blue[500],
            tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
            tabBarInactiveTintColor: colors.zinc[500],
            tabBarStyle: {
                backgroundColor: colors.zinc[950],
                borderTopColor: colors.zinc[950],
                borderTopWidth: 0,
            },
            tabBarIcon: ({ focused }: { focused: boolean }) => (
                <AntDesign
                    name={icon}
                    size={24}
                    color={focused ? colors.zinc[500] : colors.zinc[400]}
                />
            ),
        };
    }

    return (
        <Tabs>
            <Tabs.Screen name="index" options={tabOptions({ label: "Home", icon: "home" })} />
            <Tabs.Screen name="events" options={tabOptions({ label: "Events", icon: "calendar" })} />
        </Tabs>
    );
};

export default TabsLayout;
