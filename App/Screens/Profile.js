import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Theme } from '../Components/Theme';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import { Icon } from 'react-native-vector-icons/Icon';


// // import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faAddressBook, faComment, faGear, faLanguage, faLocation, faLock, faPenToSquare, faRetweet, faSquarePlus, faThumbsUp, faUser, faUserXmark } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={[styles.header, { backgroundColor: Theme.colors.greenDark }]}>
                    <Image source={{ uri: 'https://i.imgur.com/R66g1Pe.jpg' }} style={styles.avatar} />
                    <Text style={styles.username}>john@gmail.com</Text>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}><Text style={styles.label}>Full Name:</Text> John Doe</Text>
                    <Text style={styles.infoText}><Text style={styles.label}>Phone:</Text> +123456789</Text>
                    <Text style={styles.infoText}><Text style={styles.label}>Email:</Text> username@email.com</Text>
                    <Text style={styles.infoText}><Text style={styles.label}>Address:</Text> 123 Street, City</Text>
                </View>

                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconBox}>
                        <FontAwesomeIcon icon={faLock} />
                        <Text >Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBox}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <Text style={styles.iconLabel}>Edit Profile</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconBox}>
                        <FontAwesomeIcon icon={faUserXmark} />
                        <Text style={styles.iconLabel}>Delete Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                         <FontAwesomeIcon icon={faAddressBook} />
                        <Text style={styles.iconLabel}>Contact Us</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconBox}>
                         <FontAwesomeIcon icon={faSquarePlus} />
                        <Text style={styles.iconLabel}>Create Estate</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.iconBox}>
                 <FontAwesomeIcon icon={faLanguage} />
                        <Text style={styles.iconLabel}>Language</Text>
                    </TouchableOpacity>
                    
                </View>
                


                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
        // backgroundColor: '#fff',
        // flex: 1,
    },
    header: {
        alignItems: 'center',

        width: '100%',
        paddingVertical: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    username: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 20,

    },
    iconBox: {
        alignItems: 'center',
        paddingVertical: 20,
        // paddingHorizontal: 50,
        backgroundColor: '#ecf0f1',
        borderRadius: 15,
        width: 150,
    },
    iconLabel: {
        fontSize: 14,
        color: '#333',
    },
    infoBox: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        marginTop: 10
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
    label: {
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginTop: 20,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});