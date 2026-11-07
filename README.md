# Relaxo Therapist (static site, WhatsApp booking, Hyderabad only)

No database and no server. Bookings open WhatsApp with the details filled in; your WhatsApp chat is the booking record.
Edit the settings at the top of the script in index.html: WHATSAPP, LOCATIONS, PRICES.

Test locally: VS Code > Live Server extension > right-click index.html > Open with Live Server.

Deploy
1. git init, git add ., git commit -m "Relaxo Therapist site", git branch -M main
2. Create an empty GitHub repo, then: git remote add origin <repo URL>, git push -u origin main
3. vercel.com > Add New > Project > import the repo. Framework: Other. No build settings. Deploy.
4. Later changes: edit, then git add ., git commit -m "update", git push. Vercel redeploys.

Photos: put massage1.webp to massage4.webp in the images folder (under 200 KB each).
