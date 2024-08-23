import  GithubProvider  from "next-auth/providers/github"
export const options = {
    providers: [
        GithubProvider({
            profile(profile: GitHubProfile) {
                console.log("profile", profile);
                let userRoles = "Github User";
                if (profile?.email == "maaznazeer098@gmail.com") {
                    userRoles = "Admin";
                }
                return{
                    ...profile,
                    role: userRoles
                }
            }
        })
    ]
}