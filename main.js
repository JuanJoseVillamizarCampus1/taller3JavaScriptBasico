const campus={
    campus:{
        sedes :4,
        nameSedes:{
            sede1:"Bucaramanga",
            sede2:"Bogota",
            sede3:"Medellin",
            sede4:"Mexico"
        },
        sede1:{
            contacto:{
            name:"Bucaramanga",
            contacPhone: 3118807659,
            address:"Zona Franca Santander, Torre Zenith, piso 6, Bucaramanga, El Caucho, Floridablanca, Santander"
            },

            sectores:"Tecnología, información e internet",
            fundacion:2022,
            activa:true,
            especialidades:{
                educacion:{
                    softwareSkills:{
                        html:true,
                        css:true,
                        javaScript:true,
                        python:true,
                        php:true,
                        nodeJs:true,
                        go:false,
                        matlab:false
                    },
                    ingles:{
                        a1:true,
                        a2:true,
                        b1:false,
                        b2:false,
                        c1:false
                    },
                    ser:{
                        habilidades:{
                            liderazgo:"Se forman Jovenes talento, con gran sentido de pertenencia y liderazgo"
                            },
                            habilidadesComunicativas:"Se forman jovenes con capacidad de trabajo en equipo y facil adaptacion"
                    }
                }     
            }
        },
        sede2:{
            contacto:{
                name:"Bogota",
                contacPhone: 3118807650,
                address:" Cra. 1 #18a-12, La Candelaria, Bogotá, Cundinamarca"
                
                },
            sectores:"Tecnología, información e internet",
            fundacion:2020,
            activa:"I don't know"
        },
        sede3:{
            contacto:{
                name:"Medellin",
                contacPhone: 3118807651,
                address:" Cl. 67 #53-108, Aranjuez, Medellín, Aranjuez, Medellín,"
                
                },
            sectores:"Tecnología, información e internet",
            fundacion:2021,
            activa:true
        },
        sede4:{
            contacto:{
                name:"Mexico",
                contacPhone: 3118807652,
                address:" Av. Universidad 3004 Ciudad de Mexico"
                
                },
            sectores:"Tecnología, información e internet",
            fundacion:2025,
            activa:false
        }
    },
    trainers:{
        cantidad:3,
        profesionales:true,
        nivel:"Master",
        namestrainers:{
            avanzado:"Miguel",
            intermedio:"Vermen -- the best",
            basico:"Johlver"
        },
        vermen:{
            contacto:{
                name:"Vermen Ayala",
                phoneNumber:3208502824,
                email:"vermen.ayala@campuslands.com"
            },
            teams:{
                team1:"ArtemisA",
                teams2:"ArtemisB",
                horarios:{
                    artemisA:"De 6 a.m a 10 a.m",
                    artemisB:"De 1:15 a.m a 1:45 p.m",
                    asignatura:"presensial"
                },
                salon:2,
                piso:8
            }
            
        },
        miguel:{
            contacto:{
                name:"Miguel Castro",
                phoneNumber:3045641916,
                email:"miguel.castro@campuslands.com"
            },
            teams:{
                team1:"SputnikA",
                teams2:"SputnikB",
                horarios:{
                    sputnikA:"De 6 a.m a 10 a.m",
                    spuntikB:"De 1:15 a.m a 1:45 p.m",
                    asignatura:"presensial"
                },
                salon:3,
                piso:8
            }
            
        },
        johlver:{
            contacto:{
                name:"Johlver Pardo",
                phoneNumber:null,
                email:undefined
            },
            teams:{
                team1:"SputnikA",
                teams2:"SputnikB",
                horarios:{
                    sputnikA:"De 6 a.m a 10 a.m",
                    spuntikB:"De 1:15 a.m a 1:45 p.m",
                    asignatura:"presensial"
                },
                salon:3,
                piso:8
            }
            
        }
    },
    campers:{
        NumeroDeCampers:null,
        teams:{
            team1:"Mañana",
            teams2:"Mañana",
            piso:8,
            salones:3,
            
        }
    }
}