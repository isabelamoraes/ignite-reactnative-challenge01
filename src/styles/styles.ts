import { StatusBar } from 'react-native';
import colors from '../styles/colors';

export default {
    theme1: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme1.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            headerText: {
                fontSize: 24,
                color: colors.theme1.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme1.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme1.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme1.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme1.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme1.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme1.placeholderInput
        },
        task: {
            header: {
                color: colors.theme1.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme1.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme1.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme1.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme1.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme1.textDone,
                textDecorationLine: 'line-through'
            }
        }
    },
    theme2: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme2.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            },
            headerText: {
                fontSize: 24,
                color: colors.theme2.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme2.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme2.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme2.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme2.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme2.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme2.placeholderInput
        },
        task: {
            header: {
                color: colors.theme2.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme2.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme2.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme2.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme2.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme2.textDone,
                textDecorationLine: 'line-through'
            }
        }
    },
    theme3: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme3.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            },
            headerText: {
                fontSize: 24,
                color: colors.theme3.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme3.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme3.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme3.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme3.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme3.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme3.placeholderInput
        },
        task: {
            header: {
                color: colors.theme3.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme3.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme3.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme3.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme3.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme3.textDone,
                textDecorationLine: 'line-through'
            }
        }
    },
    theme4: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme4.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            },
            headerText: {
                fontSize: 24,
                color: colors.theme4.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme4.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme4.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme4.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme4.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme4.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme4.placeholderInput
        },
        task: {
            header: {
                color: colors.theme4.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme4.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme4.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme4.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme4.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme4.textDone,
                textDecorationLine: 'line-through'
            }
        }
    },
    theme5: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme5.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            },
            headerText: {
                fontSize: 24,
                color: colors.theme5.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme5.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme5.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme5.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme5.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme5.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme5.placeholderInput
        },
        task: {
            header: {
                color: colors.theme5.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme5.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme5.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme5.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme5.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme5.textDone,
                textDecorationLine: 'line-through'
            }
        }
    },
    theme6: {
        header: {
            header: {
                paddingTop: StatusBar.currentHeight,
                paddingBottom: 44,
                backgroundColor: colors.theme6.header,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            },
            headerText: {
                fontSize: 24,
                color: colors.theme6.headerText,
                fontFamily: 'Poppins-Regular',
            }
        },
        home: {
            flex: 1,
            backgroundColor: colors.theme6.background
        },
        todoInput: {
            inputContainer: {
                backgroundColor: colors.theme6.backgroundInput,
                borderRadius: 5,
                marginTop: -25,
                marginHorizontal: 40,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            },
            input: {
                flex: 1,
                backgroundColor: colors.theme6.backgroundInput,
                paddingLeft: 12,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                color: colors.theme6.textInput
            },
            inputIOSShadow: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84
            },
            inputAndroidShadow: {
                elevation: 5
            },
            addButton: {
                backgroundColor: colors.theme6.button,
                height: 50,
                paddingHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
            colorPlaceholder: colors.theme6.placeholderInput
        },
        task: {
            header: {
                color: colors.theme6.title,
                fontSize: 24,
                fontFamily: 'Poppins-SemiBold'
            },
            taskButton: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarker: {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.theme6.icon,
                marginRight: 10
            },
            taskText: {
                color: colors.theme6.text,
            },
            taskButtonDone: {
                flex: 1,
                paddingHorizontal: 10,
                paddingVertical: 12,
                marginBottom: 4,
                borderRadius: 4,
                backgroundColor: colors.theme6.backgroundDone,
                flexDirection: 'row',
                alignItems: 'center'
            },
            taskMarkerDone: {
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.theme6.iconDone,
                marginRight: 10
            },
            taskTextDone: {
                color: colors.theme6.textDone,
                textDecorationLine: 'line-through'
            }
        }
    }
};