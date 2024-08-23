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
                first_name: additionalData.first_name,
                last_name: additionalData.last_name,
                membership: "standard",
                email: email,
                kar_medlemskap: additionalData.kar_medlemskap,
                personnummer: additionalData.personnummer,
                adress: additionalData.adress,
                postnummer: additionalData.postnummer,
                stad: additionalData.stad,
                gender: additionalData.gender,
                telefonnummer: additionalData.telefonnummer
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