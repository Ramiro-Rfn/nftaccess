import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: String(process.env.GOOGLE_CLIENT_ID),
            clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
            authorization: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
        })

    ],
/* 
    callbacks: {

        redirect: async (url: string, _baseUrl: string)=>{
          if (url === '/') {
            return Promise.resolve('/profile')
          }
          return  Promise.resolve('/')
        }
    } */
})