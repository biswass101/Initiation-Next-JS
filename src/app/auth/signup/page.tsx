export default function SignUp() { 
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}