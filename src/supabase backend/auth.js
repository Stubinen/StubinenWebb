import { supabase } from "./supabaseClient.js"

export const signUpWithEmail = async (email, password, additionalData) => {
    try {
        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
          });

          if (error) {
            throw error;
          }

          // If successful creation of user
          if (data.user) {
            const { error } = await supabase
            .from('profiles')
            .insert({ 
                id: data.user.id, 
                first_name: "Ludwig",
                last_name: "Boge",
                membership: "standard",
                email: email,
                kar_medlemskap: "Lintek",
                personnummer: "0212301212",
                adress: "Skomakaregatan 9",
                postnummer: "60232",
                stad: "Norrköping",
                gender: "Man",
                telefonnummer: "0702330253"
            })
          }

          if (error) {
            throw error;
          }

          console.log('User signed up and profile created successfully');
    }
    catch (error) {
        console.error('Error signing up:', error.message);
      }
};