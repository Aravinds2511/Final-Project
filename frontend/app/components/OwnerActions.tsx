// OwnerActions.tsx
import styles from "../styles/Stake.module.css";
import { ethers } from "ethers";
import { useState } from "react";

const OwnerActions = ({ stakingModuleContract }: any) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const [addAmount, setAddAmount] = useState<string>("");
  const [apr, setApr] = useState<string>("");
  const [userStakeLimit, setUserStakeLimit] = useState<string>("");
  const [totalStakeLimit, setTotalStakeLimit] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleOwnerWithdrawTokens = async () => {
    try {
      setStatus("Withdrawing tokens...");
      const tx = await stakingModuleContract.ownerWithdrawTokens(ethers.utils.parseEther(withdrawAmount));
      await tx.wait();
      setStatus("Tokens withdrawn successfully!");
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleOwnerAddTokens = async () => {
    try {
      setStatus("Adding tokens...");
      const tx = await stakingModuleContract.ownerAddTokens(ethers.utils.parseEther(addAmount));
      await tx.wait();
      setStatus("Tokens added successfully!");
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleSetApr = async () => {
    try {
      setStatus("Setting APR...");
      const tx = await stakingModuleContract.setApr(ethers.BigNumber.from(apr));
      await tx.wait();
      setStatus("APR set successfully!");
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleSetUserStakeLimit = async () => {
    try {
      setStatus("Setting user stake limit...");
      const tx = await stakingModuleContract.setUserStakeLimit(ethers.BigNumber.from(userStakeLimit));
      await tx.wait();
      setStatus("User stake limit set successfully!");
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleSetTotalStakeLimit = async () => {
    try {
      setStatus("Setting total stake limit...");
      const tx = await stakingModuleContract.setTotalStakeLimit(ethers.BigNumber.from(totalStakeLimit));
      await tx.wait();
      setStatus("Total stake limit set successfully!");
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Withdraw Tokens</h2>
        <div>
          <label className={styles.label}>Amount to Withdraw</label>
          <input className={styles.input} value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleOwnerWithdrawTokens}>
          Withdraw Tokens
        </button>
        <div className={styles.status}>{status}</div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Add Tokens</h2>
        <div>
          <label className={styles.label}>Amount to Add</label>
          <input className={styles.input} value={addAmount} onChange={(e) => setAddAmount(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleOwnerAddTokens}>
          Add Tokens
        </button>
        <div className={styles.status}>{status}</div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Set APR</h2>
        <div>
          <label className={styles.label}>APR</label>
          <input className={styles.input} value={apr} onChange={(e) => setApr(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleSetApr}>
          Set APR
        </button>
        <div className={styles.status}>{status}</div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Set User Stake Limit</h2>
        <div>
          <label className={styles.label}>User Stake Limit</label>
          <input className={styles.input} value={userStakeLimit} onChange={(e) => setUserStakeLimit(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleSetUserStakeLimit}>
          Set User Stake Limit
        </button>
        <div className={styles.status}>{status}</div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Set Total Stake Limit</h2>
        <div>
          <label className={styles.label}>Total Stake Limit</label>
          <input
            className={styles.input}
            value={totalStakeLimit}
            onChange={(e) => setTotalStakeLimit(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleSetTotalStakeLimit}>
          Set Total Stake Limit
        </button>
        <div className={styles.status}>{status}</div>
      </section>
    </>
  );
};

export default OwnerActions;
