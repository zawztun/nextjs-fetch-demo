import React from 'react'
import Link from 'next/link'



export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users:data
      },
    }
  }

const Users = ({users}) => {
  return (
    <div>
       <div>
           <Link href = "/"><a> See User List</a></Link> 
            </div>
       <h1>User Lists</h1>
       {
        users.map(user=> (
          <div key = {user.id}>
              <div>
              <Link href = {'/users/' + user.id}>
                <a>
                  <h2>{user.name}</h2>
                </a>
              </Link>
                </div>
          </div>
        ))
       }
    </div>
  )
}

export default Users