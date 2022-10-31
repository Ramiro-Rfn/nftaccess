import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

import styles from '../styles/Profile.module.scss';

type User = {
    name: string;
    email: string;
    image: string;
}

interface DashboardProps {
    user: User
}

export default function Dashboard ({ user }: DashboardProps) {
    console.log(user)
    
    return (
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <img src={user.image} alt="user avatar" />
          </div>

          <div className={styles.profileInfo}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 32}}>
              <FaGithub color="#fff" size={24}/>
              <a style={{
                  color: '#fff', 
                  marginLeft: 8, 
                  fontSize: 14,
                  fontWeight: 'bold'
                }} 
                href="https://github.com/Ramiro-Rfn"
              >
                Ramiro-Rfn
              </a>
            </div>

            <div>
              <button onClick={()=>signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>  
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    
    if (!session) {
      context.res.writeHead(302, { Location: "/" });
      context.res.end();
      return {
        props: {}
      };
    }
    
    return {
      props: {
        user: session.user,
      },
    };
  }