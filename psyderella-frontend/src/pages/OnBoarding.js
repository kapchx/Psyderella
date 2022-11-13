import { useState } from 'react';
import Navbar from "../components/Navbar"

const Onboarding = () => {

    const handleChange = () => {
        console.log("changes")
    }

    const handleSubmit = () => {
        console.log("submitted")
    }

    return (
        <>
            <Navbar
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label thmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            required={true}
                            value={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={handleChange}
                            />
                        </div>
                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <label>Man</label>
                            <input
                                id="man_gender"
                                type="radio"
                                name="gender"
                                value="man"
                                onChange={handleChange}
                            />
                            <label>Woman</label>
                            <input
                                id="women_gender"
                                type="radio"
                                name="gender"
                                value="woman"
                                onChange={handleChange}
                            />
                        </div>
                        <label>Show me</label>
                        <div className="multiple-input-container">
                            <label>Man</label>
                            <input
                                id="man_gender_interes"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                            />
                            <label>Woman</label>
                            <input
                                id="women_gender_interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                            />
                        </div>
                        <label>About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks"
                            value={""}
                            onChange={handleChange}
                        />
                        <label>Profile Picture</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />

                    </section>
                </form>
            </div>
        </>
    )
}

export default Onboarding;