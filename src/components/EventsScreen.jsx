import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { fetchEventsDetails } from '../api/eventsService';
import styles from '../styles/eventsStyles';

const EventsScreen = ({ route, navigation }) => {
    const { token } = route.params;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEventsDetails = async () => {
            try {
                const data = await fetchEventsDetails(token);
                setEvents(data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        getEventsDetails();
    }, [token]);

    if (!events) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading events...</Text>
            </View>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {events.map(event => (
                    <View key={event.id} style={styles.card}>
                        <View style={styles.cardCont}>
                            <TouchableOpacity onPress={() => navigation.navigate('EventDetailsScreen', { token, eventId: event.id })}>
                                <Image
                                    source={{ uri: `https://api.worldeventaccess.com/api/PublicEventLogo/${event.id}` }}
                                    style={styles.logo}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('EventDetailsScreen', { token, eventId: event.id })}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{event.name}</Text>
                                    <Text style={styles.subtitle}>{event.organizer}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>{event.description}</Text>
                            <Text style={styles.date}>Starts:  {formatDate(event.eventStartDate)}</Text>
                            <Text style={styles.date}>Ends:    {formatDate(event.eventEndDate)}</Text>
                            <Text style={styles.location}>Location: {event.address}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Events Management System</Text>
            </View>
        </View>
    );
};

export default EventsScreen;