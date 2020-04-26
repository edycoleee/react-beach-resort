import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            },
            {
                icon:<FaHiking/>,
                title:"free hiking",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttlevan",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            },
            {
                icon:<FaBeer/>,
                title:"free beer",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
        ]
    }
    render() {
        return (
            <div className="services">                
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return (
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}
