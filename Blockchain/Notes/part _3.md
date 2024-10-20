### Notes on Symmetric Cryptography

---

#### **Introduction to Symmetric Cryptography**
- **Objective**: This chapter introduces both the theoretical and practical aspects of symmetric cryptography, focusing on its relevance within blockchain technology.
- **Practical Application**: The chapter also covers how cryptographic algorithms can be practically implemented using the OpenSSL command-line tool.

#### **Topics Covered**:
1. **Introducing Cryptography**:
    - Basics of cryptography and its role in securing data.
    - Discusses confidentiality, integrity, authentication, and non-repudiation.
2. **Cryptographic Primitives**:
    - Fundamental components used in cryptography like hash functions, symmetric and asymmetric keys, and digital signatures.
3. **Advanced Encryption Standard (AES)**:
    - A specific focus on the AES cryptographic algorithm.

#### **OpenSSL Installation**:
- **Requirement**: Installation of OpenSSL is necessary for practical exercises in the chapter.
- **Installation Command (for Ubuntu)**: 
    ```bash
    $ sudo apt-get install openssl
    ```
- **Version Compatibility**: 
   - Examples in the chapter are developed and tested on OpenSSL version 3.0.1.
   - Usage of other versions is allowed but not guaranteed to work properly.

---

### **Introducing Cryptography**

- **Definition**: Cryptography is the science of making information secure in the presence of adversaries.
    - **Ciphers**: Algorithms used to encrypt and decrypt data.
    - Encrypted data appears meaningless to adversaries unless decrypted with a secret key.
  
- **Primary Service**:
    - **Confidentiality**: Ensures that unauthorized parties cannot access or understand the data.
  
- **Other Security Services**:
    - **Integrity**: Ensures that data has not been altered.
    - **Authentication**: Verifies the identity of entities or the origin of data.
    - **Non-repudiation**: Ensures that a party cannot deny the authenticity of their signature on a document or a message.

- **Key Building Blocks**:
    - Cryptography is not a complete solution but a fundamental building block in a comprehensive security system.
    - Essential in blockchain ecosystems, where a range of cryptographic primitives are used, including:
        - **Hash functions**
        - **Symmetric key cryptography**
        - **Digital signatures**
        - **Public key cryptography** (covered in the next chapter).

---

### **Generic Cryptographic Model**

- **Model Components**:
    - **Plaintext (P)**: The original message/data that needs to be protected.
    - **Ciphertext (C)**: The encrypted version of the plaintext that is unreadable to unauthorized parties.
    - **Key (K)**: The secret data used to encrypt the plaintext and decrypt the ciphertext.
  
- **Diagram**: A generic encryption and decryption model was provided (labeled as Figure 3.1), showcasing the flow of plaintext, ciphertext, and key in a typical cryptographic system.

---

These notes provide a structured overview of the key concepts and tools introduced in this chapter on symmetric cryptography, with a focus on its application in blockchain and its practical implementation using OpenSSL.

---
### Notes on Cryptographic Services

---

#### **Introduction**
Cryptography provides a range of essential services, each of which contributes to securing information in various contexts, especially in adversarial environments. Below are detailed explanations of the services provided by cryptography.

---

### **1. Confidentiality**
- **Definition**: Ensures that information is only accessible to authorized entities.
- **Purpose**: Protects data from being read or accessed by unauthorized individuals.

---

### **2. Integrity**
- **Definition**: Ensures that information can only be modified by authorized entities.
- **Purpose**: Guarantees the accuracy and consistency of data, preventing unauthorized tampering.

---

### **3. Authentication**
- **Definition**: Provides assurance regarding the identity of an entity or the validity of a message.
- **Types**:
    - **Entity Authentication**: 
        - Ensures that the communicating entity is active and involved in the session.
        - Commonly achieved through **single-factor authentication** (username and password) or **multi-factor authentication**.
        - **Multi-factor Authentication**:
            - **Something you have**: e.g., hardware token or smart card.
            - **Something you are**: e.g., biometric data (fingerprint, iris, retina).
    - **Data Origin Authentication** (Message Authentication):
        - Ensures that the source of the information is verified.
        - This authentication also inherently ensures **data integrity** because corroborating the source implies that the data has not been altered.
        - Methods include:
            - **Message Authentication Codes (MACs)**
            - **Digital Signatures**

---

### **4. Non-Repudiation**
- **Definition**: Ensures that an entity cannot deny a previous commitment or action by providing undeniable cryptographic evidence.
- **Purpose**: Prevents disputes by holding entities accountable for actions such as signing documents, placing orders, or sending messages.
- **Protocols**: 
    - **Non-repudiation protocol**: Provides evidence that an entity has performed an action.
    - **Models of Communication**:
        1. Direct communication between sender (A) and recipient (B).
        2. Communication through a **delivery agent** (A to agent to B).
    - **Key Requirements**:
        - **Fairness**: Ensures that neither party can cheat.
        - **Effectiveness**: Guarantees successful evidence transfer.
        - **Timeliness**: Ensures timely delivery of the cryptographic proof.
    - **Multi-Party Non-Repudiation (MPNR)**:
        - Addresses scenarios where multiple parties are involved, such as in electronic trading (brokers, traders, clearing agents).

---

### **5. Accountability**
- **Definition**: Ensures that actions impacting security can be traced to the responsible party.
- **Purpose**: Allows tracking and tracing of actions, typically through logging and auditing.
    - **Audit Mechanisms**: Systems often log activities like trades or orders in electronic trading, accompanied by timestamps and identity markers.
    - **Log Management**: Logs can be stored securely as part of databases or as standalone encrypted text files.

---

### **Cryptographic Primitives**
- **Purpose**: To provide the services mentioned (confidentiality, integrity, authentication, non-repudiation, and accountability), different cryptographic primitives are used. These are explored in the next section of the chapter.

---

These notes summarize the cryptographic services, focusing on their definitions, purposes, and methods of implementation. Each service contributes to building a robust and secure system capable of handling adversarial threats, especially in areas like blockchain, electronic trading, and secure communication.
---
### Notes on Cryptographic Primitives

---

#### **Introduction to Cryptographic Primitives**
- **Definition**: Cryptographic primitives are the foundational components used to build security protocols or systems.
- **Purpose**: They help achieve various security goals such as confidentiality, integrity, authentication, and more by implementing specific security mechanisms.
- **Security Protocols**: Steps taken using cryptographic primitives to meet security objectives. Examples include:
    - **Authentication protocols**
    - **Non-repudiation protocols**
    - **Key management protocols**

#### **Taxonomy of Cryptographic Primitives**
Cryptographic primitives are divided into three categories:
1. **Keyless Primitives**
2. **Symmetric Key Primitives**
3. **Asymmetric Key Primitives**

- **Keyless primitives** and **symmetric cryptography** are discussed in this section.
- **Asymmetric cryptography** (public key cryptography) is covered in Chapter 4.

---

### **Keyless Primitives**
Keyless primitives include components that do not require keys for their functioning. Two keyless primitives are:
1. **Random Numbers**
2. **Hash Functions** (discussed later)

#### **1. Random Numbers**
- **Importance**: Randomness is a critical factor for the security of cryptographic protocols. It is used for:
    - Key generation
    - Various encryption algorithms
- **Purpose**: Randomness ensures cryptographic operations are unpredictable, preventing adversaries from inferring how algorithms work, thus securing them from cryptanalysis.

- **Categories of Randomness**:
    - **Random Number Generators (RNGs)**
    - **Pseudorandom Number Generators (PRNGs)**

##### **Random Number Generators (RNGs)**
- **Definition**: RNGs rely on real-world randomness, known as **real randomness**, derived from physical phenomena such as:
    - Temperature variations
    - Thermal or acoustic noise from electronic components
    - Keystrokes, mouse movements, or disk movements
- **Limitations**: Real-world randomness can be difficult to collect, may have insufficient entropy, and might not always be available or accessible for long durations.

##### **Pseudorandom Number Generators (PRNGs)**
- **Definition**: PRNGs are deterministic algorithms that use a random initial value, called a **seed**, to generate a sequence of numbers that appear random.
- **Common Usage**: PRNGs are widely used in cryptography for tasks like key generation.
- **Example**: **Blum-Blum-Shub (BBS)** is a well-known PRNG.
    - Reference: [Blum, L., Blum, M., and Shub, M. (1986)](https://shub.ccny.cuny.edu/articles/1986-A_simple_unpredictable_pseudo-random_number_generator.pdf)
- **Advantages**: 
    - PRNGs are more reliable and easier to implement compared to RNGs.
    - They produce consistent outputs given the same seed, making them deterministic.

##### **Generating Random Strings with OpenSSL**
- **Command**: To generate a pseudorandom string using OpenSSL:
    ```bash
    $ openssl rand -hex 16
    ```
- **Example Output**: 
    ```
    06532852b5da8a5616dfade354a9f270
    ```
- **Exploration**: You can explore further random generation options with OpenSSL using the command:
    ```bash
    $ openssl help
    ```

---

### **Next Topic: Hash Functions**
- **Importance**: Hash functions are vital in cryptographic systems, particularly in the development and security of blockchain technology. This will be discussed in the next section.

---

These notes provide a detailed overview of cryptographic primitives, particularly focusing on keyless primitives and their role in ensuring randomness in cryptographic systems. Randomness is essential for the unpredictability and security of encryption algorithms, with both RNGs and PRNGs playing critical roles in generating secure keys.
---
### Notes on Hash Functions

---

#### **Introduction to Hash Functions**
- **Purpose**: Hash functions generate a fixed-length digest (or hash) from an arbitrarily long input string. 
- **Keyless**: They don’t require keys and are primarily used for ensuring **data integrity**.
- **Applications**: Digital signatures, Message Authentication Codes (MACs), data integrity services, and even pseudorandom number generators.

#### **Hash Function Properties**
1. **Compression**: Converts inputs of any length into a fixed-length output (usually between 128-bit to 512-bit).
2. **Efficiency**: Hash functions should be easy and fast to compute, even for large inputs.

#### **Security Properties**
1. **Pre-image resistance**: It is computationally infeasible to find an input value \(x\) from a given hash output \(y\), i.e., given \(h(x) = y\), finding \(x\) should be extremely difficult. This property is also known as the **one-way property**.
2. **Second pre-image resistance**: It is computationally infeasible to find another input \(x'\) that produces the same hash as an already given input \(x\), i.e., \(h(x) = h(x')\). This is also known as **weak collision resistance**.
3. **Collision resistance**: It is computationally infeasible to find two distinct inputs \(x\) and \(x'\) such that \(h(x) = h(x')\). This property is also known as **strong collision resistance**.

---

### **Avalanche Effect**
- **Definition**: A small change in the input (even a single bit) should result in a completely different hash output. This is an essential characteristic of a good cryptographic hash function.

---

### **Hash Function Construction**
- **Iterated Hash Functions**: These functions break the input into fixed-size blocks and then apply a compression function iteratively. One common construction is **Merkle-Damgard**, which ensures collision resistance if the underlying compression function is collision-resistant.

- **Other Constructions**:
  - **Miyaguchi-Preneel**
  - **Davies-Meyer**

---

### **Types of Hash Functions**
#### **Message Digest (MD) Functions**
- **MD4/MD5**: Popular in the early 1990s but no longer secure due to vulnerabilities found through message collisions.
    - **MD5**: A 128-bit hash function used for file integrity checks but now considered insecure.

#### **Secure Hash Algorithms (SHAs)**
- **SHA-0**: A 160-bit hash introduced in 1993 by NIST. Now deprecated.
- **SHA-1**: Also 160-bit, introduced in 1995 and used in SSL/TLS but is now insecure and deprecated.
- **SHA-2**: Includes SHA-224, SHA-256, SHA-384, and SHA-512. These remain secure.
- **SHA-3**: The latest family of hash functions, standardized from the **Keccak** algorithm, includes SHA3-224, SHA3-256, SHA3-384, and SHA3-512. **Ethereum** uses Keccak, not NIST’s modified SHA-3.

#### **RIPEMD**: Based on MD4 design, available in 128-bit, 160-bit, 256-bit, and 320-bit versions.

#### **Whirlpool**: Based on the Rijndael cipher, using a **Miyaguchi-Preneel compression function**. Whirlpool has a fixed 512-bit output.

---

### **Applications of Hash Functions**
- **File integrity checks**
- **Password storage**
- **Digital signatures**
- **Cryptographic protocols** (e.g., SSL/TLS)
- **P2P networks** (e.g., file sharing, virus fingerprinting)
- **Merkle trees** and **Patricia trees**
- **Distributed hash tables**

---

### **SHA-256 Overview**
- **Input Limit**: Can process messages up to \(2^{64} - 1\) bits.
- **Block Size**: 512 bits.
- **Output Size**: 256-bit digest.
- **Compression Function**: Divides the input into 512-bit blocks, processes each in 64 rounds to produce the final hash.

**Major Components**:
1. **Padding**: Ensures that the message length is a multiple of 512 bits.
2. **Initial Hash Value**: Consists of eight 32-bit constants derived from the square roots of the first eight prime numbers.
3. **Hash Computation**: Each 512-bit block is processed iteratively through a **compression function**, producing intermediate hash values until the final hash is computed.

**Functions**:
- **Maj** (Majority function): Outputs the majority of inputs.
- **Ch** (Choice function): Selects between inputs based on a condition (like an “if-else” statement).

---

### **Next Topic: SHA-3**
- SHA-3 differs from SHA-2 in structure and design. Ethereum's **Keccak** algorithm, an earlier version of SHA-3, is used in many blockchain applications.

The **SHA-3 (Keccak)** algorithm is fundamentally different from its predecessors (SHA-1 and SHA-2) due to its use of unkeyed permutations and the **sponge construction** method rather than the Merkle-Damgard transformation. Here's a breakdown of the key concepts and functions:

### Key Concepts:
- **Sponge Construction**: The core idea behind SHA-3, it absorbs and processes input in blocks and squeezes out the transformed output. It's composed of two phases: 
  - **Absorb phase**: The input data (`m`) is padded and absorbed into the state using XOR.
  - **Squeeze phase**: The output hash is squeezed out from the state after processing the data.

- **Rate (r)**: Defines the input block size.
- **Capacity (c)**: Determines the security level.
- **State size (b)**: The sum of `r` and `c`, typically set to values like 1600 bits.

The transformation in SHA-3 involves five operations:
1. **Theta (θ)**: XOR bits in the state to mix.
2. **Rho (ρ)**: Rotates bits for diffusion.
3. **Pi (π)**: Permutes the bit positions.
4. **XOR**: Combines bits bitwise.
5. **Iota (ι)**: Adds round constants.

SHA-3 operates in 24 rounds of transformations to ensure security.

### SHA-3 Variants:
- **SHA3-224, SHA3-256, SHA3-384, SHA3-512**: These are fixed-output variants providing varying levels of security.
- **SHAKE128 and SHAKE256**: These are extendable-output functions (XOFs), where the output can be extended to any desired length.

### Applications:
1. **Proof of Work (PoW) in Bitcoin**: Uses SHA-256 to secure the mining process.
2. **Address Generation in Ethereum**: Ethereum addresses are derived by hashing public keys with Keccak-256.
3. **Merkle Trees**: Used to verify data integrity in blockchains.
4. **Digital Signatures**: Hash functions are used to create message digests, ensuring data integrity and non-repudiation.

### Merkle Tree:
A Merkle tree is a binary tree structure that efficiently verifies large datasets. By hashing pairs of child nodes and progressing to the parent nodes, the tree ultimately produces a **Merkle root**, which represents the integrity of the entire dataset. Any changes to a node will alter the Merkle root, making it a secure and efficient verification mechanism.

### Merkle-Patricia Trie:
Used in Ethereum, this hybrid data structure combines **Merkle trees** for cryptographic security and **Patricia tries** for efficient storage. It's used to store key-value pairs, such as Ethereum account balances, with keys compressed using a common prefix. The root hash of this trie is included in each block header, ensuring the integrity of the entire blockchain.

In summary, SHA-3's innovation through sponge construction, alongside its use in various blockchain applications (such as PoW, address generation, and Merkle trees), plays a crucial role in ensuring security and efficiency in decentralized systems like Bitcoin and Ethereum.

**Distributed Hash Tables (DHTs)** are a critical component of decentralized systems, enabling efficient data retrieval in peer-to-peer (P2P) networks. Here’s an overview of how they function and their significance:

### Key Concepts of DHTs:
- **Hash Table Structure**: 
  - A traditional hash table maps keys to values using a hash function to calculate an index for storage in an array of buckets. 
  - In a DHT, this concept is expanded to a distributed context where the data is spread across multiple nodes rather than being centralized.

- **Nodes as Buckets**: 
  - Each node in a DHT acts like a bucket in a traditional hash table, storing records that are accessible via their hash keys. 

- **Hashing Process**:
  - When data is added to the DHT, a hash function generates a compact key based on the data (like a filename).
  - This key is used to link the data to the corresponding node in the P2P network.

- **Data Retrieval**: 
  - When a user requests data (e.g., by filename), the filename is hashed again to produce the same key.
  - Any node in the network can be queried to locate the corresponding data, making the retrieval process efficient and decentralized.

### Advantages of DHTs:
1. **Decentralization**: DHTs eliminate the need for a central server, reducing the risk of a single point of failure and enhancing resilience against attacks.
2. **Fault Tolerance**: Since data is distributed across multiple nodes, the system can continue to function even if some nodes go offline.
3. **Scalability**: DHTs can efficiently handle increasing amounts of data and users, making them suitable for large-scale applications.

### Applications:
- DHTs are widely used in applications like file sharing (e.g., BitTorrent), distributed storage systems, and decentralized blockchain networks. They facilitate efficient data lookup, storage, and management without relying on centralized authorities.

### Connection to Cryptographic Hash Functions:
- Cryptographic hash functions play a vital role in DHTs, as they are used to generate the keys that link data to nodes. This ensures that data retrieval is consistent and secure.
- The importance of cryptographic hash functions extends to constructing Merkle trees, which enable fast verification of large datasets in blockchain technology, further highlighting their role in decentralized systems.

### Next Steps:
- Once you’ve covered symmetric key cryptography, exploring **Message Authentication Codes (MACs)** and **HMACs** (Hash-based Message Authentication Codes) will provide insight into how hash functions are used in conjunction with keys to secure data, ensuring integrity and authenticity.

In summary, DHTs represent a robust framework for decentralized data management, leveraging cryptographic hash functions to enable secure and efficient data retrieval in a distributed environment.

---
