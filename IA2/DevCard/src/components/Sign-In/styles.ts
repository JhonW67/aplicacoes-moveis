import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerSignIn: {
        padding: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    },
    subtitle: {
        color: '#666',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 5,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
    },
    inputError: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        padding: 12,
    },
    msgError: {
        color: 'red',
        fontSize: 12,
    },
    containerColors: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 25,
    },
    btnColor: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
    },
    active: {
        borderColor: '#a458eb',
        backgroundColor: '#f0eaff',
    },
    btnSave: {
        backgroundColor: '#a458eb',
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
    },
    txtBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
}); 