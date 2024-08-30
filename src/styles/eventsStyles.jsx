import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    card: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    cardCont: {
        flexDirection: "row",
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    description: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },
    date: {
        fontSize: 12,
        color: '#555',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 12,
        color: '#555',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#181824',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        color: '#ffffff',
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
