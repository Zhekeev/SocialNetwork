import profileInfo from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className={profileInfo.descriptionBlock}>
                ava+description
                <hr/>
            </div>
        </div>
    )
}

export default ProfileInfo;