import {createClient} from 'contentful'

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})



// Name RoomResort
//Space ID n9sne5158gcr
//space: "n9sne5158gcr",
//accessToken: "pw8xievIDv2ZyfYhmKMWgCLMUsmCY63zZKqKx3AJkPM"
//Content Delivery API - access token pw8xievIDv2ZyfYhmKMWgCLMUsmCY63zZKqKx3AJkPM
//Content Preview API - access token LenzHqery6kyXA96T2BMW9nCwpo8CElIAUWKAto-2To

