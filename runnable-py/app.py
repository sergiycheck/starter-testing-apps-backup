import os
import sqlite3
from Crypto.Cipher import AES
import keyring

# Path to the copied Login Data file
login_data_path = os.path.expanduser('~/Desktop/LoginDataCopy')

# Retrieve the Chrome encryption key from Keychain
encryption_key = keyring.get_password('Chrome Safe Storage', 'Chrome')

# Connect to the SQLite database
conn = sqlite3.connect(login_data_path)
cursor = conn.cursor()

# Query the logins table
cursor.execute('SELECT origin_url, username_value, password_value FROM logins')
for row in cursor.fetchall():
    url, username, encrypted_password = row
    
    # Decrypt the password
    try:
        # Chrome uses AES encryption with a fixed IV
        iv = b' ' * 16  # 16-byte initialization vector
        cipher = AES.new(encryption_key.encode(), AES.MODE_CBC, iv)
        decrypted_password = cipher.decrypt(encrypted_password[3:])  # Remove the prefix
        decrypted_password = decrypted_password.rstrip(b'\x00').decode('utf-8')  # Remove padding
        
        print(f'URL: {url}, Username: {username}, Password: {decrypted_password}')
    except Exception as e:
        print(f'Error decrypting password for {url}: {e}')

conn.close()