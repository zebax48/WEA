import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { fetchEventDetails } from '../api/eventService';
import styles from '../styles/eventStyles';

const EventDetailsScreen = ({ route }) => {
    const { token, eventId } = route.params;
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const data = await fetchEventDetails(eventId, token);
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        getEventDetails();
    }, [eventId, token]);

    if (!event) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading event details...</Text>
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
                <View style={styles.section}>
                    <Image
                        source={{ uri: `https://api.worldeventaccess.com/api/PublicEventLogo/${event.id}` }}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>{event.name}</Text>
                    <Text style={styles.subtitle}>Organizer: {event.organizer}</Text>
                    <Text style={styles.description}>{event.description}</Text>
                    <Text style={styles.date}>Starts:  {formatDate(event.eventStartDate)}</Text>
                    <Text style={styles.date}>Ends:    {formatDate(event.eventEndDate)}</Text>
                    <Text style={styles.location}>Location: {event.address}</Text>
                </View>


                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Event Information</Text>
                    <Text style={styles.info}>Visitors Price: ${event.visitorsPrice || 'N/A'}</Text>
                    <Text style={styles.info}>Exhibitor Price: ${event.exibitorPrice || 'N/A'}</Text>
                    <Text style={styles.info}>Capacity: {event.capacity || 'N/A'} people</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Parking Services</Text>
                    <Text style={styles.info}>
                        Free Parking: {event.hasFreeParking ? 'Available' : 'Not Available'}
                    </Text>
                    <Text style={styles.info}>
                        Standard Parking: {event.hasStandardParking ? `$${event.standardParkingPrice}` : 'Not Available'}
                    </Text>
                    <Text style={styles.info}>
                        VIP Parking: {event.hasVIPParking ? `$${event.vipParkingPrice}` : 'Not Available'}
                    </Text>
                </View>
            </ScrollView>
        </View>

    );
};

export default EventDetailsScreen;