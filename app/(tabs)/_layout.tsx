import { Tabs } from 'expo-router';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF69B4',
        headerShown: false
      }}>
      <Tabs.Screen
        name="Recommendations"
        options={{
          title: 'Vibes',
          tabBarIcon: () => <TabBarIcon name="comments" color={'#FF69B4'} />,
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: () => <TabBarIcon name="home" color={'#FF69B4'} />,
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: () => <TabBarIcon name="calendar" color={'#FF69B4'} />,
        }}
      />
    </Tabs>
  );
}
