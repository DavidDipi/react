import { useState } from "react"

export function TwitterFollowCard ({ children, userName, name, initialIsFollowing }) {

    const [isFollowing, setisFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setisFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt={`${userName}'s avatar`}
                    className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Stop Follow</span>
                </button>
            </aside>
        </article>
    )
}